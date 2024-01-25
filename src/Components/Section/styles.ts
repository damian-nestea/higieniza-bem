import styled from "styled-components";
import { SectionType } from "./index.tsx";

export const Container = styled.section<SectionType>`
  width: 100%;
  background-color: ${({ $bgcolor }) => ($bgcolor ? $bgcolor : "inherit")};

  padding: 4rem 2rem;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }
`;
