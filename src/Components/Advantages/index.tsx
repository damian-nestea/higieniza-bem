import React from "react";
import Section from "../Section";
import AdvantageCard from "./AdvantageCard";
import { Container } from "./styles";

const Advantages = () => {
  return (
    <Container>
      <Section title="Diferenciais" $bgcolor="gray">
        <AdvantageCard />
        <AdvantageCard />
        <AdvantageCard />
      </Section>
    </Container>
  );
};

export default Advantages;
