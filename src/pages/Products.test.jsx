import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { Products } from './Products';

describe('Products', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should render list of products', async () => {
    const mAxiosResponse = {
      data: {
        items: [
          {
            id: 'CLCKR48006',
            title: 'MagSafe Stand and Grip for iPhone 12 and 13 Series - Black',
            price: 2099,
            image:
              'https://ss7.vzw.com/is/image/VerizonWireless/clckr-magsafe-stand-and-grip-iphone-12-and-13-series-black-clckr48006-iset?$acc-lg$&hei=251&wid=220',
            discountPercentage: 13,
            discountedPrice: '1826.13',
            quantity: 1,
          },
        ],
        totalCount: 100,
      },
    };
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
    render(<Products />);
    expect(
      await screen.findByText(
        'MagSafe Stand and Grip for iPhone 12 and 13 Series - Black'
      )
    ).toBeInTheDocument();
  });
});
