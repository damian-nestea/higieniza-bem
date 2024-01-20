import styled from "styled-components";
import { BurguerNavProps } from "./index";

export const Container = styled.div<BurguerNavProps>`
  width: 4rem;
  height: 3rem;
  position: fixed;
  top: 5rem;
  right: 2rem;
  z-index: 99;

  display: none;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 4rem;
    height: 0.5rem;
    background-color: ${({ open }) => (open ? "#aaa" : "#333")};

    border-radius: 1rem;

    transform-origin: 0.6rem;
    transition: all 0.4s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;
