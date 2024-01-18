import React from "react";
import { Container } from "./styles";
import RightNav from "./RIghtNav";
import BurguerNav from "./BurguerNav";

const Header = () => {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/111815242?v=4"
        alt="Imagem"
      />
      <BurguerNav />
      <RightNav />
    </Container>
  );
};

export default Header;
