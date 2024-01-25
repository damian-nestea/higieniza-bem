import React from "react";
import { Container } from "./styles";

export type SectionType = {
  title?: string;
  $bgcolor?: string;
  children: React.ReactNode;
};

const Section = ({ title, $bgcolor, children }: SectionType) => {
  return (
    <Container $bgcolor={$bgcolor}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

export default Section;
