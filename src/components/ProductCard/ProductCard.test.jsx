import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const props = {
    product: {
      id: 'SMT227UZAA',
      title: 'Samsung Galaxy Tab A7 Lite in Gray',
      price: 13999,
      image:
        'https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-tab-a7-lite-smt227uzaa-lte-gray_IMAGESETS?$acc-lg$&hei=251&wid=220',
      discountPercentage: 13,
    },
    addToCart: jest.fn(),
  };
  test('renders ProductCard', () => {
    render(<ProductCard {...props} />);
    expect(
      screen.getByText(/Samsung Galaxy Tab A7 Lite in Gray/i)
    ).toBeInTheDocument();
  });
  test('add to cart click', () => {
    render(<ProductCard {...props} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(props.addToCart).toBeCalledTimes(1);
  });
});
