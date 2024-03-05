import React from "react";
import { Container } from "./styles";
import instagramIcon from "../../Assets/instagram.svg";

const Footer = () => {
  return (
    <Container>
      <div id="info">
        <h4>Informações de Contato</h4>
        <ul>
          <li>E-mail: emaildaempresa@gmail.com</li>
          <li>Endereço: Rua da Empresa 800</li>
          <li>Poços de Caldas, Minas Gerais</li>
        </ul>
        <p>(35)99883-4541</p>
      </div>
      <div id="horario">
        <h4>Informações de Contato</h4>
        <p> Aberto de segunda à sexta das 8h às 18h</p>
      </div>
      <div id="social-links">
        <img src={instagramIcon} alt="Instagram Icon" />
      </div>
    </Container>
  );
};

export default Footer;
