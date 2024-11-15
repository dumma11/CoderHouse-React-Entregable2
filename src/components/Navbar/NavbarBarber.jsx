import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import imagen from '../../assets/images/logochico.png'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavbarBarber.css'

const NavbarBarber = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/CoderHouse-React-ProyectoFinal/'>
            <img src={imagen} alt="Logo" />
            <span className="ms-4">TiendaCoder</span>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/CoderHouse-React-ProyectoFinal/'>Home</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to='/CoderHouse-React-ProyectoFinal/category/Celulares'>Celulares</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/CoderHouse-React-ProyectoFinal/category/Tablets'>Tablets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/CoderHouse-React-ProyectoFinal/category/Laptops'>Laptops</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/CoderHouse-React-ProyectoFinal/'>Vista General</NavDropdown.Item>
            </NavDropdown>
            <CartWidget itemCount="0" />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarBarber
