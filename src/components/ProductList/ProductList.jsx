import './ProductList.scss';
import { Container } from 'react-bootstrap';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductList = ({ products }) => {
  return (
    <Container>
      <div className="product-row">
        {products &&
          products.length &&
          products.map((item) => (
            <div className="product-col" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </Container>
  );
};
