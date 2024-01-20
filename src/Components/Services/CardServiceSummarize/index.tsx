import React from "react";
import { Container } from "./styles";

const CardServiceSummarize = ({
  imgUrl,
  serviceSummarize,
}: {
  imgUrl: string;
  serviceSummarize: string;
}) => {
  return (
    <Container>
      <img src={imgUrl} alt="Imagem de Serviço" />
      <p>{serviceSummarize}</p>
    </Container>
  );
};

export default CardServiceSummarize;
