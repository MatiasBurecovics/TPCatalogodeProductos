import { Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Cards = (props) => {
    return (

        <Container className='p-3 text-center'>
            <Link to={`/product/${props.element.id}`}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ height:'32rem', width: '32rem' }}>
                        <Card.Img className='cardImg' style={{ height: '20rem', border: '3px' }} variant="top" src={props.element.img} />
                        <Card.Body>
                            <Card.Title>{props.element.nombre}</Card.Title>
                            <Card.Text>
                                {props.element.descripcion}
                            </Card.Text>
                            <Card.Text>
                                ${props.element.precio}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Link>
        </Container>

    )
}

Cards.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    precio: PropTypes.number,
}

export default Cards;