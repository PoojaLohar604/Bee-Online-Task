import React from "react";
import "./NavbarTab.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavbarTab = () => {
  return (
    <>
      {[false].map((expand) => (
        <div className="navbar-content">
        <Navbar key={expand} expand="lg">
          <Container fluid >
            <Navbar.Brand href="#">Brandname</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} 
                className="offcanvas-title">
                  Brandname
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navbar-nav">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Product</Nav.Link>
                  <Nav.Link href="#action1">Pricing</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                </Nav>
                <div className="navbar-nav-end">
                  <Nav.Link href="#action2">Login</Nav.Link>
                  <button>
                    JOIN US <FaArrowRightLong />
                  </button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      ))}
    </>
  );
};

export default NavbarTab;
