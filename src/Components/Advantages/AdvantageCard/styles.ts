import styled from "styled-components";

export const Container = styled.article`
  width: 80%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;

  border: 1px solid #aaa;
  padding: 2rem;
  border-radius: 0.5rem;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  img {
    width: 50%;
    border-radius: 50%;
  }
`;
