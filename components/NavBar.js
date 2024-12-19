// NavBar.js

"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from 'react-bootstrap';
import { useTheme } from "./ThemProvider";

function NavBar() {
  const { theme, toggleTheme } = useTheme(); // Consome o tema e a função de alternar

  // Definir a cor do fundo do Navbar com base no tema
  const navbarBgColor = theme === "dark" ? "dark" : "light";

  const bodyclass = () => {
    if(theme === "dark"){
      document.body.classList.toggle('darkmode');
    }
  };
  
  return (
    <Navbar className="w-75 rounded-bottom-1" bg={navbarBgColor} variant={theme} data-bs-theme={theme}>
      <Container>
        <Nav className="me-auto justify-content-start d-flex">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="features">About Me</Nav.Link>
          <Nav.Link href="pricing">Projects</Nav.Link>
        </Nav>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={theme === "dark"} // Define se o switch está marcado de acordo com o tema atual
            onChange={toggleTheme} // Altera o tema ao clicar
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
