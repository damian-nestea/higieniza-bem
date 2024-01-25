import React from "react";
import Section from "../Section";
import AdvantageCard from "./AdvantageCard";
import { Container } from "./styles";

const Advantages = () => {
  const item = {
    id: 0,
    icon: "https://w7.pngwing.com/pngs/279/877/png-transparent-hyperlink-computer-icons-link-text-logo-number.png",
    description: "Descrição curta dos diferenciais da empresa.",
  };

  return (
    <Container>
      <Section title="Diferenciais" $bgcolor="gray">
        <AdvantageCard
          id={item.id}
          icon={item.icon}
          description={item.description}
        />
        <AdvantageCard
          id={item.id}
          icon={item.icon}
          description={item.description}
        />
      </Section>
    </Container>
  );
};

export default Advantages;
