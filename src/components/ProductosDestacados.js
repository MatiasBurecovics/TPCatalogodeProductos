import React, { useState, useEffect } from 'react';
import { GetAllProducts } from '../Axios/AxiosClient';
import { Row, Container } from 'react-bootstrap';
import Cards from './Cards';

const ProductsDestacados = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await GetAllProducts(6); 
        setProducts(res.data.products);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <br />
      <h5>Productos destacados</h5>
      <Row md={3}>
        {products.map(item => (
          <Cards key={item.id} element={item} />
        ))}
      </Row>
    </Container>
  );
}

export default ProductsDestacados;
