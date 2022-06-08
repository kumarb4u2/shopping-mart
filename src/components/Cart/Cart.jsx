import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config';
import { CartItems } from '../CartItems/CartItems';
import './Cart.scss';

export const Cart = () => {
  const [itemCount, setitemCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    async function fetchItemCount() {
      try {
        const response = await axios.get(`${BASE_URL}cartItemCount`);
        setitemCount(response.data.cartItemCount);
      } catch (e) {
        setitemCount(0);
      }
    }
    fetchItemCount();
  }, []);

  return (
    <div className="cart-container">
      <button
        className="cart-icon-container btn btn-link"
        onClick={() => setShowCart(!showCart)}
      >
        <strong className="text-white cart-value">{itemCount}</strong>
        <img
          alt="cart icon"
          src="/cart.png"
          className="d-inline-block align-top"
        />
      </button>
      {showCart && <CartItems />}
    </div>
  );
};
