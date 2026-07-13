import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoExpreso Dashboard Header', () => {
  render(<App />);
  const headerElement = screen.getByText(/AutoExpreso Portal/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders tracking stat summary components', () => {
  render(<App />);
  const tollSummaryCard = screen.getByText(/Total Toll Expenses/i);
  expect(tollSummaryCard).toBeInTheDocument();
});
