import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chest thumpers heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/chest thumpers/i);
  expect(headingElement).toBeInTheDocument();
});
