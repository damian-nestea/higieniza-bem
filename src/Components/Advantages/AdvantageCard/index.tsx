import React from "react";
import { Container } from "./styles";

export type AdvantageProps = {
  id: number;
  icon: string;
  description: string;
};

const AdvantageCard = ({ id, icon, description }: AdvantageProps) => {
  return (
    <Container key={id}>
      <img src={icon} alt="Icone" />
      <p>{description}</p>
    </Container>
  );
};

export default AdvantageCard;
