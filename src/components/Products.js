import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import Cards from './Cards';
import { GetAllProducts, GetAllCategorias } from '../Axios/AxiosClient';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); 
    const [categorias, setCategorias] = useState([])
    const [productos, setProductos] = useState()
    //Falta crear el GetAllCategorias
    async function fetchData() {
       const allProductos =  await GetAllProducts(categorias)
       const allCategorias = await GetAllCategorias()
        setCategorias(allCategorias)
        setProductos(allProductos)
    }

    const filteredProducts = selectedCategory === 'All'
        ? productos
        : productos.filter(product => product.nombre === selectedCategory);
    return (
        <Container>
            <br />
            <h5>Productos destacados</h5>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">Todos</option>
                {categorias.forEach(element => {
                    <option value={element}>{element}</option>
                })}
            </select>

            <Row md={3}>
                {filteredProducts.map(item => <Cards key={item.id} element={item} />)}
            </Row>
        </Container>
    );
}

export default Products;
