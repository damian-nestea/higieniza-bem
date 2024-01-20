import React from "react";
import { Container } from "./styles";
import CardServiceSummarize from "./CardServiceSummarize";

const Services = () => {
  const imgUrl =
    "https://blog.nortonabrasivos.com.br/hubfs/lavagem%20automotiva.jpeg";
  const serviceSummarize =
    "Este é um resumo de um serviço feito pela empresa para mostrar como é feito esse determinado serviço";
  return (
    <Container>
      <CardServiceSummarize
        imgUrl={imgUrl}
        serviceSummarize={serviceSummarize}
      />
      <CardServiceSummarize
        imgUrl={imgUrl}
        serviceSummarize={serviceSummarize}
      />
      <CardServiceSummarize
        imgUrl={imgUrl}
        serviceSummarize={serviceSummarize}
      />
      <CardServiceSummarize
        imgUrl={imgUrl}
        serviceSummarize={serviceSummarize}
      />
    </Container>
  );
};

export default Services;
