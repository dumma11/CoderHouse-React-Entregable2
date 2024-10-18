import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imagen from '../../assets/images/logochico.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'
import './NavbarBarber.css'

const NavbarBarber = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={imagen} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Peluquería</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Cuidado del Cabello
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Cuidado de la Barba
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Herramientas y Accesorios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                Vista General
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget itemCount="0" />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBarber