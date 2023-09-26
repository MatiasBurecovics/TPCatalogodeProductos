import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom"; 


const InfoProduct = () => {

    const {id}   = useParams();
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

        const product = products.find(element => element.id === parseInt(id, 10));
    return (
        
        <Container className='p-3 text-center'>
          
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ height: '500px', width: '500px'}}>
                        <Card.Img className='cardImg' style={{ height: '400px', border: '3px' }} variant="top" src={product && product.img} />
                        <Card.Body>
                            <Card.Title>{product && product.nombre}</Card.Title>
                            <Card.Text>
                                {product && product.descripcion}
                            </Card.Text>
                            <Card.Text style={{fontWeight: '500'}}>
                                ${product && product.precio}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        </Container>

    )
}
export default InfoProduct;