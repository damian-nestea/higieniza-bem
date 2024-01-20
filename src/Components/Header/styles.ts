import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;

  width: 100%;
  background-color: lightpink;

  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10rem;
  }
`;
