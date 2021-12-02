import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar fixed='top' collapseOnSelect expand="lg"  variant="light">
      <Container fluid>
          <Navbar.Brand to="/">ASMH</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
            <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/ourvision">OurVision</Nav.Link>
              <Nav.Link href="/weoffers">Weoffers</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </div>
  );
};

export default NavBar;
