import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { BurguerNavProps } from "../BurguerNav";

const RightNav = ({ open }: BurguerNavProps) => {
  return (
    <Container open={open}>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/about">Serviços</Link>
      <Link to="/about">Contato</Link>
    </Container>
  );
};

export default RightNav;
