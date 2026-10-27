/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// A window in the tiling layout: a title bar plus content.
export default function Tile({ title, className = '', children }) {
  return (
    <section className={`tile ${className}`} aria-label={title}>
      <p className="tile-title">{title}</p>
      <div className="tile-body">{children}</div>
    </section>
  );
}
