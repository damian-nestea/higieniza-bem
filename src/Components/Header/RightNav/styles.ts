import styled from "styled-components";
import { BurguerNavProps } from "../BurguerNav";

export const Container = styled.nav<BurguerNavProps>`
  display: flex;
  gap: 2rem;

  @media (max-width: 750px) {
    flex-flow: column nowrap;

    position: fixed;
    top: 4rem;
    right: 0;
    height: 20rem;
    width: 20rem;
    background-color: lightgray;

    padding: 3.5rem;
    border-radius: 0.5rem 0 0 0.5rem;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;
