import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });
});
