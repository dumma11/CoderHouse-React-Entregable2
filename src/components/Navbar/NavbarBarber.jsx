import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imagen from '../../assets/images/logochico.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavbarBarber.css'

const NavbarBarber = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={imagen} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/CoderHouse-React-Entregable2/'}>Home</Nav.Link>
            <Nav.Link href="#features">Peluquería</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={'category/beauty'}>beauty</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'category/fragrances'}>fragrances</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'category/furniture'}>furniture</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={'/CoderHouse-React-Entregable2/'}>Vista General</NavDropdown.Item>
            </NavDropdown>
            <CartWidget itemCount="0" />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBarber