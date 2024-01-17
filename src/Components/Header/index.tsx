import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/111815242?v=4"
        alt="Imagem"
      />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </Container>
  );
};

export default Header;
