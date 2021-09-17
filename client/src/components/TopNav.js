import React from 'react';
import { 
  Container,
  Navbar,
  Nav,

  
  } from 'react-bootstrap';

const TopNav = () => {
  return (
    <>
<Navbar bg="light" expand="md">
  <Container>
    <Navbar.Brand href="/">Throw Me A Bone</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#/">Home</Nav.Link>
<Nav.Link href="about">About</Nav.Link>          
<Nav.Link href="contact">Contact</Nav.Link>        
<Nav.Link href="login">Login</Nav.Link>        
<Nav.Link href="signup">signup</Nav.Link>        

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  );
}

export default TopNav;
