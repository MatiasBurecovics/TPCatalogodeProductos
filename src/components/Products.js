import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import Cards from './Cards';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); 
    const products = [
        {
            id: 1,
            img: "https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg",
            nombre: "Lavatorios",
            descripcion: "Mueble colgante para Lavatorios",
            precio: 33.909
        },
        {
            id: 2,
            img: "https://http2.mlstatic.com/D_NQ_NP_724901-MLA44019620312_112020-O.webp",
            nombre: "Griferías",
            descripcion: "Griferías de alta calidad",
            precio: 45.99
        },
        {
            id:3,
            img: "https://bercovichsa.vtexassets.com/arquivos/ids/164914/inodoro-alto-espacio-ferrum-blanco-ietmj-principal.jpg?v=638223651328730000",
            nombre: "Inodoro",
            descripcion: "Inodoro moderno",
            precio: 250.909
        }
        ,
        {
            id:4,
            img: "https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg",
            nombre: "Lavatorios",
            descripcion: "Mueble colgante para Lavatorios",
            precio: 33.909
        }
        ,
        {
            id:5,
            img: "https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg",
            nombre: "Lavatorios",
            descripcion: "Mueble colgante para Lavatorios",
            precio: 33.909
        }
        ,
        {
            id:6,
            img: "https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg",
            nombre: "Lavatorios",
            descripcion: "Mueble colgante para Lavatorios",
            precio: 33.909
        }
    ];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.nombre === selectedCategory);

    return (
        <Container>
            <br />
            <h5>Productos destacados</h5>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">Todos</option>
                <option value="Lavatorios">Lavatorios</option>
                <option value="Griferías">Griferías</option>
                <option value="Inodoro">Inodoros</option>
          
            </select>

            <Row md={3}>
                {filteredProducts.map(item => <Cards key={item.id} element={item} />)}
            </Row>
        </Container>
    );
}

export default Products;
