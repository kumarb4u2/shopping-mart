import './Products.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import { Header } from '../components/Header/Header';
import { BASE_URL, PAGE_SIZE } from '../config';
import { Pagination } from '../components/Pagination/Pagination';
import { Container } from 'react-bootstrap';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [itemCount, setitemCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setCurrentPage();
    async function fetchData() {
      try {
        const response = await axios.get(
          `${BASE_URL}products?page=${activePage}&size=${PAGE_SIZE}`
        );
        setProducts(response.data.items);
        setTotalProductCount(response.data.totalCount);
      } catch (e) {
        setProducts([]);
      }
      setIsLoading(false);
    }
    fetchItemCount();
    fetchData();
  }, [activePage]);

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

  const setCurrentPage = () => {
    if (sessionStorage.getItem('activePage')) {
      setActivePage(sessionStorage.getItem('activePage'));
    } else {
      sessionStorage.setItem('activePage', 1);
      setActivePage(1);
    }
  };
  const handlePageSelection = (pageNumber) => {
    sessionStorage.setItem('activePage', pageNumber);
    setActivePage(pageNumber);
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
          <Pagination
            totalCount={totalProductCount}
            pageSize={PAGE_SIZE}
            activePage={activePage}
            onPageSelection={handlePageSelection}
          />
          {products.length ? (
            <ProductList products={products} addToCart={addToCart} />
          ) : null}
          <Pagination
            totalCount={totalProductCount}
            pageSize={PAGE_SIZE}
            activePage={activePage}
            onPageSelection={handlePageSelection}
          />
        </Container>
      )}
    </>
  );
};
