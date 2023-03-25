import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Radio Panda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Inicio">Inicio </Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          <Nav.Link as={Link}  to="/productos">Producto</Nav.Link>
          <Nav.Link as={Link} to="/programa">Programa</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
