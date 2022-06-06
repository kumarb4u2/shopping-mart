export const ProductPrice = ({ product }) => (
  <p>
    <span className="text-secondary">
      MRP:{' '}
      <span className="text-decoration-line-through">
        &#8377;{product.price}
      </span>
    </span>
    <span> &#8377;{product.discountedPrice}</span>
    <span className="text-secondary"> | </span>
    <span className="text-success">{product.discountPercentage}% OFF</span>
  </p>
);
