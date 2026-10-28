/* eslint-env jest */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../i18n';
import Bar from './Bar';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2026, 9, 27, 21, 21, 43));
});

afterEach(() => {
  jest.useRealTimers();
});

// Browser page translation rewrote "9:21:43 PM" to "21:21:43" between React's
// per-second updates, so the clock flipped formats on the English locale.
test('clock opts out of page translation and follows the site language', () => {
  render(<MemoryRouter><Bar /></MemoryRouter>);
  const clock = screen.getByText('9:21:43 PM');
  expect(clock).toHaveAttribute('translate', 'no');

  fireEvent.click(screen.getByRole('button', { name: 'pt' }));
  expect(clock).toHaveTextContent('21:21:43');
});
