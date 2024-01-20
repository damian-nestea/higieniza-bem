import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  background-color: darkgray;

  padding: 3rem;
  border-radius: 1rem;

  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  img {
    width: 100%;
    border-radius: 100%;
  }
`;
