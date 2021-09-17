import React from 'react';
import { 
  Container,
  Navbar,
  Nav,
  NavDropdown, 
  
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
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Action</NavDropdown.Item>
          <NavDropdown.Item href="#">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  );
}

export default TopNav;
