import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: lightgreen;

  padding: 1rem;

  font-size: clamp(0.7rem, 1rem + 1vw, 1.5rem);

  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  #info,
  #horario,
  #social-links {
    margin: 0 auto;

    text-align: center;
  }

  #info ul {
    margin-block: 0.5rem;

    list-style: none;

    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
  }

  #info p {
    font-size: clamp(0.9rem, 1rem + 2vw, 1.9rem);
  }

  #horario {
    h4 {
      margin-bottom: 0.5rem;
    }
  }
`;
