import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navbar navigation', () => {
  render(<App />);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});
