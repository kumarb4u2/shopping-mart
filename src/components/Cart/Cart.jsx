import { useEffect, useState } from 'react';
import { CartItems } from '../CartItems/CartItems';
import './Cart.scss';

export const Cart = ({ itemCount }) => {
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    const clickListener = (e) => {
      if (!document.getElementById('cartItemsContainer').contains(e.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener('click', clickListener);
    return () => {
      document.removeEventListener('click', clickListener);
    };
  }, []);

  return (
    <div className="cart-container" id="cartItemsContainer">
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
