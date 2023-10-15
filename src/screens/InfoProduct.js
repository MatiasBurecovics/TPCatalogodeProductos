import React, { useState, useEffect } from 'react';
import { Card, Container, Carousel } from 'react-bootstrap'; 
import { useParams } from "react-router-dom";
import { GetProductById } from '../Axios/AxiosClient';

const InfoProduct = () => {
    const params = useParams();
    const [product, setProduct] = useState();

    async function fetchData() {
        const res = await GetProductById(params.id);
        console.log(res);
        setProduct(res.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container className='p-3 text-center'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ width: '500px' }}>
                    <Carousel>
                        {product && product.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img className='d-block w-100' src={image} alt={`Image ${index}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Card.Body>
                        <Card.Title>{product && product.title}</Card.Title>
                        <Card.Text>
                            {product && product.description}
                        </Card.Text>
                        <Card.Text style={{ fontWeight: '500' }}>
                            ${product && product.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}

export default InfoProduct;

