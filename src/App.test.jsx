/* eslint-env jest */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import './i18n';
import App from './App';

test('defaults to English and switches to Portuguese', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect(screen.getByText('Full-stack software engineer')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'pt' }));
  expect(screen.getByText('Engenheiro de software full-stack')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Ver meus projetos' })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('pt-BR');
  expect(localStorage.getItem('lang')).toBe('pt');
});
