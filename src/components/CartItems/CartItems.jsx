import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { BASE_URL } from '../../config';
import './CartItems.scss';

export const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axios.get(`${BASE_URL}cartItems`);
        setCartItems(response.data.items);
        setCartTotal(response.data.cartTotal);
      } catch (e) {
        setCartItems([]);
      }
    }
    fetchCartItems();
  }, []);
  return (
    <div className="cart-details border border-dark pt-4">
      {cartItems.length ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="row mb-4 px-3">
              <div className="col-4">
                <Image src={item.image} alt={item.title} width="60px" />
              </div>
              <div className="col-6">
                <strong>{item.title}</strong>
              </div>
              <div className="col-2">
                {item.quantity} X {item.discountedPrice}
              </div>
            </div>
          ))}

          <h5 className="text-right pt-1 px-3 border-top border-warning">
            <span>
              <strong>Total: </strong>
              <span> {cartTotal}</span>
            </span>
          </h5>
        </>
      ) : (
        <p className="text-danger px-3">
          No item in the cart, please add by clicking{' '}
          <strong>Add to cart</strong>.
        </p>
      )}
    </div>
  );
};
