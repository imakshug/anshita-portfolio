import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navigation', () => {
  render(<App />);
  const portfolioElement = screen.getByText(/Anshita/i);
  expect(portfolioElement).toBeInTheDocument();
});

test('renders main sections', () => {
  render(<App />);
  
  // Check if main sections are rendered
  expect(screen.getByText(/MBA Marketing Professional/i)).toBeInTheDocument();
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Let's Connect/i)).toBeInTheDocument();
});
