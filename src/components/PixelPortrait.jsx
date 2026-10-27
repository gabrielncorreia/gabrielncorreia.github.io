/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../images/esse4.jpg';

// Dusk palette sampled from the background, darkest to lightest.
const RAMP = [
  '#0a1724', '#10233a', '#183250', '#24435c', '#3d4a66', '#5e4560',
  '#7e4343', '#a3543f', '#c86e52', '#e3906f', '#f4bc98', '#fde6cf',
].map((hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)));

const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
// How far the ordered dither can push a pixel, in palette levels. Lower = cleaner.
const DITHER = 0.45;

// Full-height crop of esse4.jpg (1280x960) around the face; CSS covers the rest.
const CROP = {
  x: 405, y: 0, w: 800, h: 960,
};

// Columns per frame: the portrait sharpens from blocky to final on load.
const STEPS = [7, 14, 28, 56, 112];
const REVEAL_MS = 650;

const prefersReducedMotion = () => (
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
);

function pixelate(img, cols) {
  const rows = Math.round((cols * CROP.h) / CROP.w);
  const scratch = document.createElement('canvas');
  scratch.width = cols;
  scratch.height = rows;
  const ctx = scratch.getContext('2d', { willReadFrequently: true });
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, CROP.x, CROP.y, CROP.w, CROP.h, 0, 0, cols, rows);

  const frame = ctx.getImageData(0, 0, cols, rows);
  const px = frame.data;
  const lum = new Float32Array(cols * rows);
  let min = 1;
  let max = 0;
  for (let i = 0; i < lum.length; i += 1) {
    const l = (0.2126 * px[i * 4] + 0.7152 * px[i * 4 + 1] + 0.0722 * px[i * 4 + 2]) / 255;
    lum[i] = l;
    min = Math.min(min, l);
    max = Math.max(max, l);
  }

  const range = max - min || 1;
  const top = RAMP.length - 1;
  for (let i = 0; i < lum.length; i += 1) {
    const x = i % cols;
    const y = Math.floor(i / cols);
    // Clamp: Float32 storage can round a value just below min, and a negative ** 1.2 is NaN.
    const t = (Math.max(0, lum[i] - min) / range) ** 1.2;
    const dither = ((BAYER[(y % 4) * 4 + (x % 4)] + 0.5) / 16 - 0.5) * DITHER;
    const level = Math.max(0, Math.min(top, Math.round(t * top + dither)));
    [px[i * 4], px[i * 4 + 1], px[i * 4 + 2]] = RAMP[level];
    px[i * 4 + 3] = 255;
  }
  return frame;
}

// Random order in which pixels drop out during the hover reveal.
function shuffledRanks(count) {
  const order = Array.from({ length: count }, (_, i) => i);
  for (let i = count - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const rank = new Uint32Array(count);
  order.forEach((cell, position) => { rank[cell] = position; });
  return rank;
}

function paint(canvas, frame) {
  const target = canvas;
  target.width = frame.width;
  target.height = frame.height;
  target.getContext('2d').putImageData(frame, 0, 0);
}

export default function PixelPortrait() {
  const { t } = useTranslation();
  const pixelRef = useRef(null);
  const photoRef = useRef(null);
  const art = useRef(null);
  const reveal = useRef({
    value: 0, target: 0, raf: 0, last: 0,
  });

  // Draw the pixel art with the first `value` share of pixels (in shuffled order) removed.
  function renderReveal(value) {
    const { frame, rank } = art.current;
    const threshold = value * rank.length;
    const { data } = frame;
    for (let i = 0; i < rank.length; i += 1) {
      data[i * 4 + 3] = rank[i] < threshold ? 0 : 255;
    }
    pixelRef.current.getContext('2d').putImageData(frame, 0, 0);
  }

  function tick(now) {
    const state = reveal.current;
    const step = (now - state.last) / REVEAL_MS;
    state.last = now;
    state.value = state.target > state.value
      ? Math.min(state.target, state.value + step)
      : Math.max(state.target, state.value - step);
    renderReveal(state.value);
    state.raf = state.value === state.target ? 0 : requestAnimationFrame(tick);
  }

  function setRevealed(on) {
    const state = reveal.current;
    state.target = on ? 1 : 0;
    if (!art.current || state.raf || state.value === state.target) return;
    if (prefersReducedMotion()) {
      state.value = state.target;
      renderReveal(state.value);
      return;
    }
    state.last = performance.now();
    state.raf = requestAnimationFrame(tick);
  }

  useEffect(() => {
    const img = new Image();
    const steps = prefersReducedMotion() ? STEPS.slice(-1) : STEPS;
    let timerId;

    img.onload = () => {
      const photoCanvas = photoRef.current;
      photoCanvas.width = CROP.w;
      photoCanvas.height = CROP.h;
      photoCanvas.getContext('2d')
        .drawImage(img, CROP.x, CROP.y, CROP.w, CROP.h, 0, 0, CROP.w, CROP.h);

      let step = 0;
      const next = () => {
        const frame = pixelate(img, steps[step]);
        paint(pixelRef.current, frame);
        step += 1;
        if (step < steps.length) {
          timerId = setTimeout(next, 160);
          return;
        }
        art.current = { frame, rank: shuffledRanks(frame.width * frame.height) };
        // Hovered while it was still building up: start the reveal now.
        if (reveal.current.target === 1) setRevealed(true);
      };
      next();
    };
    img.src = photo;

    return () => {
      img.onload = null;
      clearTimeout(timerId);
      cancelAnimationFrame(reveal.current.raf);
    };
  }, []);

  return (
    <div
      className="portrait"
      role="img"
      aria-label={t('home.portraitAlt')}
      onPointerEnter={() => setRevealed(true)}
      onPointerLeave={() => setRevealed(false)}
    >
      <canvas ref={photoRef} className="portrait-photo" />
      <canvas ref={pixelRef} className="portrait-pixels" />
    </div>
  );
}
