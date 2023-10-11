import React, { useState, useEffect } from 'react';
import { GetAllProducts, GetProductsByCategories, GetAllCategorias } from '../Axios/AxiosClient';
import { Row, Container } from 'react-bootstrap';
import Cards from './Cards';
import PropTypes from 'prop-types';


const Products = (props) => {

    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const fetchData = async () => {
        const res = await GetAllProducts(props.number);
        setProduct(res.data.products);
    };

    useEffect(() => {
        fetchData();
    }, [props.number]);

    useEffect(() => {
        async function fetchCategories() {
            const res = await GetAllCategorias();
            setCategories(res.data);
          
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            async function fetchProductsByCategory() {
                const res = await GetProductsByCategories(selectedCategory);
                setProduct(res.data.products);
            }
            fetchProductsByCategory();
        } else {
            fetchData();
        }
    }, [selectedCategory]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Container>
            <br />
            <h5>Todos los productos</h5>
            <select onChange={handleCategoryChange}>
                <option value="">Todos</option>
                {categories && categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <Row md={3}>
                {product && product.map(item => <Cards key={item.id} element={item} />)}
            </Row>
        </Container>
    );
}

Products.propTypes = {
    number: PropTypes.number.isRequired
}

export default Products;
