import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  margin: 0 auto;

  .letters {
    display: flex;
    justify-content: center;
  }
`;

export const Letter = styled.div`
  display: inline-block;
  margin-top: 3.2rem;

  text-align: center;
  text-transform: uppercase;

  font-size: 2.4rem;
  font-weight: 700;

  color: var(--light);

  &::after {
    content: "";
    width: 2.4rem;
    height: 2px;

    display: block;

    background-color: var(--light);
  }

  & + div {
    margin-left: 1.2rem;
  }
`;
