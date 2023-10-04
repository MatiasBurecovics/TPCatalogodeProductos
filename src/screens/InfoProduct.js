import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom"; 
import { GetProductById } from '../Axios/AxiosClient';


const InfoProduct = () => {

    const params = useParams()
    
    const [product, setProduct] = useState()
    
    async function fetchData() {
        const res = await GetProductById(params.id);
        setProduct(res.data);
    }

    useEffect(() => {
        fetchData()
        
    },[])

        
        
    return (
        
        <Container className='p-3 text-center'>
          
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ height: '500px', width: '500px'}}>
                        <Card.Img className='cardImg' style={{ height: '400px', border: '3px' }} variant="top" src={product && product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product && product.Title}</Card.Title>
                            <Card.Text>
                                {product && product.description}
                            </Card.Text>
                            <Card.Text style={{fontWeight: '500'}}>
                                ${product && product.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        </Container>

    )
}
export default InfoProduct;