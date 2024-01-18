import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 750px) {
    display: none;
    flex-flow: column nowrap;

    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 20rem;
    background-color: lightgray;

    padding: 3.5rem;
  }
`;
