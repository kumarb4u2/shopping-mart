import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { Cart } from './Cart';

describe('Cart', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should render number of item in the cart', () => {
    render(<Cart itemCount="5" />);
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
  it('should show the cartItems when clicked on cart icon', () => {
    render(<Cart />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/No item in the cart/i)).toBeInTheDocument();
  });
  it('should hide the cart items when click anywhere on the document', () => {
    render(<Cart />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/No item in the cart/i)).toBeInTheDocument();
    fireEvent.click(document);
    expect(screen.queryByText(/No item in the cart/i)).toBeNull();
  });
});
