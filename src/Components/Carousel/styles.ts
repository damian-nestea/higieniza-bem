import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 2rem;

  > div {
    cursor: pointer;
    > img {
      width: 2rem;
    }
  }
`;
