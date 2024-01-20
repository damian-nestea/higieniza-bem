import React from "react";
import { Container } from "./styles";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

export default Section;
