import { render, screen } from '@testing-library/react';
import { ProductList } from './ProductList';

describe('ProductList', () => {
  const props = {
    products: [
      {
        id: 'SMT227UZAA',
        title: 'Samsung Galaxy Tab A7 Lite in Gray',
        price: 13999,
        image:
          'https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-tab-a7-lite-smt227uzaa-lte-gray_IMAGESETS?$acc-lg$&hei=251&wid=220',
        discountPercentage: 13,
      },
    ],
    addToCart: jest.fn(),
  };
  test('renders ProductList', () => {
    render(<ProductList {...props} />);
    expect(
      screen.getByText(/Samsung Galaxy Tab A7 Lite in Gray/i)
    ).toBeInTheDocument();
  });
});
