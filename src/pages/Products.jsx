import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Header } from '../components/Header/Header';
import { BASE_URL } from '../config';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${BASE_URL}products`);
        setProducts(response.data);
      } catch (e) {
        setProducts([]);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="pt-5"></div>
      {products.length ? <ProductList products={products} /> : null}
    </>
  );
};
