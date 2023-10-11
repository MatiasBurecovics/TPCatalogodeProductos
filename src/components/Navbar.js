import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {

    return (
      <Navbar bg="white" variant="white">
      <Container>
          <Nav className="ms-auto" >
              <Link className="nav-link active" to="">INICIO</Link>
              <Link className="nav-link active" to="/products">PRODUCTOS</Link>
          </Nav>
      </Container>
  </Navbar>
    );
}

export default CustomNavbar;