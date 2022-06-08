import './ProductCard.scss';
import Button from 'react-bootstrap/Button';
import { ProductPrice } from '../ProductPrice/ProductPrice';

export const ProductCard = ({ product }) => {
  return (
    <section className="card-container text-center border pt-2 px-2 h-100 position-relative">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <p className="mt-4">
        <strong>{product.title}</strong>
      </p>
      <ProductPrice product={product} />
      <div className="button-container">
        <Button>Add to cart</Button>
      </div>
    </section>
  );
};
