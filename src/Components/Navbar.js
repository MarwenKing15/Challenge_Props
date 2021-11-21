import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoStore from "./assets/Legendary-Motorsport-Logo.png";

function NavBar() {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src={logoStore} alt="LogoStore" width="120px"/></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#categories">Categories</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br /> 
        </div>
    )
}

export default NavBar
