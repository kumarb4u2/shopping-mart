import './ProductList.scss';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-row">
      {products &&
        products.length &&
        products.map((item) => (
          <div className="product-col" key={item.id}>
            <ProductCard product={item} addToCart={addToCart} />
          </div>
        ))}
    </div>
  );
};
