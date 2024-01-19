import styled from "styled-components";
import { Props } from "../BurguerNav";

export const Container = styled.nav<Props>`
  display: flex;
  gap: 2rem;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: 750px) {
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
