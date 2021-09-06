import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';

export const Bar = () => {

    return (
        <div className="gg">
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Movie List</Nav.Link>
        <Nav.Link href="/AddMovie">Add Movie</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
