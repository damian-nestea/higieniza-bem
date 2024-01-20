import React from "react";
import { Container } from "./styles";
import Section from "../../Components/Section";

const Home = () => {
  return (
    <Container>
      <div>
        <img
          src="https://revistacarro.com.br/wp-content/uploads/2022/03/Abarth-Pulse_3.jpg"
          alt="Imagem de Carro"
        />
        <p>
          BEM-VINDO À HIGIENIZA BEM! <span>Conheça nossos serviços...</span>
        </p>
      </div>
      <Section title="Higieniza bem">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          quasi! Quibusdam cum, facilis sunt amet eveniet sequi voluptate error
          non quaerat illo numquam exercitationem nemo libero aperiam laboriosam
          doloribus repellendus! Qui asperiores, tempore inventore praesentium
          consectetur, pariatur illo dolorem quis vero ducimus quibusdam
          laudantium nobis possimus aliquam! Sed reprehenderit tenetur aut
          voluptate? Impedit voluptas sequi hic. Deleniti, aliquam enim?
          Cupiditate? Inventore veritatis accusamus, laboriosam quibusdam fugit.
        </p>
      </Section>
    </Container>
  );
};

export default Home;
