import styled from "styled-components";

export const Container = styled.div`
  width: 4rem;
  height: 3rem;
  position: fixed;
  top: 15px;
  right: 20px;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 4rem;
    height: 0.5rem;
    background-color: #333;
  }
`;
