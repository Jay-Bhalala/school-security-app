import React from "react";
import {
    Navbar,
    Nav,
    Container,
    Offcanvas
} from "react-bootstrap";

function BasicNavBar() {
    return (
      <div>
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            bg="dark"
            variant="dark"
            expand={expand}
            className="mb-3"
          >
            <Container fluid>
            <Navbar.Brand href="/">SecurEd</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Cratos
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/forum">Forum</Nav.Link>
                    <Nav.Link href="/attendance">Attendance</Nav.Link>
                    <Nav.Link href="/map">Map</Nav.Link>
                    <Nav.Link href="/updates">Updates</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
  );
}

export default BasicNavBar;