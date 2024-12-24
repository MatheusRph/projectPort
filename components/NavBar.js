// NavBar.js

"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";
import { Form } from 'react-bootstrap';
import { useTheme } from "./ThemProvider";

function NavBar() {
  const { theme, toggleTheme } = useTheme(); // Consome o tema e a função de alternar

  // Definir a cor do fundo do Navbar com base no tema
  const navbarBgColor = theme === "dark" ? "dark" : "light";

  const bodyclass = () => {
    if (theme === "dark") {
      document.body.classList.toggle('darkmode');
    }
  };

  return (
    <Navbar collapseOnSelect expand='lg' className="w-75 rounded-bottom-1 flex-column" bg={navbarBgColor} variant={theme} data-bs-theme={theme}>
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-start align-items-center d-flex navtext">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="features">About Me</Nav.Link>
            <Nav.Link href="/certificates">Certificates</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Get in touch</Nav.Link>
          </Nav>
          <Nav className="me-auto justify-content-end align-items-center d-flex">
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={theme === "dark"} // Define se o switch está marcado de acordo com o tema atual
                onChange={toggleTheme} // Altera o tema ao clicar
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
