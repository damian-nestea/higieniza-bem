import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  background-color: lightblue;

  div {
    position: relative;
  }

  div > img {
    width: 100%;
  }

  div > p {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 3rem 1rem;

    text-align: center;
    background-color: rgba(220, 220, 220, 0.6);
    span {
      display: block;
    }
  }
`;
