import './Products.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Header } from '../components/Header/Header';
import { BASE_URL } from '../config';
import { Pagination } from '../components/Pagination/Pagination';
import { Container } from 'react-bootstrap';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [itemCount, setitemCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${BASE_URL}products`);
        setProducts(response.data);
      } catch (e) {
        setProducts([]);
      }
      setIsLoading(false);
    }
    fetchItemCount();
    fetchData();
  }, []);

  const fetchItemCount = async () => {
    try {
      const response = await axios.get(`${BASE_URL}cartItemCount`);
      setitemCount(response.data.cartItemCount);
    } catch (e) {
      setitemCount(0);
    }
  };

  const addToCart = async (item) => {
    try {
      const response = await axios.post(`${BASE_URL}cartItems`, item);
      if (response.data.id === item.id) {
        fetchItemCount();
      }
    } catch (e) {
      setProducts([]);
    }
  };
  return (
    <>
      <Header itemCount={itemCount} />

      {isLoading ? (
        <div className="spinner">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <Container>
          <div className="pt-4"></div>
          <Pagination />
          {products.length ? (
            <ProductList products={products} addToCart={addToCart} />
          ) : null}
          <Pagination />
        </Container>
      )}
    </>
  );
};
