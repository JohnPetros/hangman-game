import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 1.2rem;
  text-align: center;

  h1 {
    color: var(--light);
    text-decoration: underline;
    letter-spacing: 2px;

    margin: 1.2rem 0;

    & {
    @media (max-width: 600px) {
      display: none;
    }
  }
  }

  .letters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  > p.theme {
    margin-top: 2.4rem;

    color: var(--secondary);
    letter-spacing: 1.4px;
    font-weight: 600;
    font-size: 1.8rem;

    strong {
      color: var(--light);
      text-transform: capitalize;
    }
  }

  > button {
    display: block;
    margin-top: 2.8rem;
    margin-inline: auto;
    padding: 1.2rem;
    border-radius: var(--border-radius);

    background-color: var(--dark);
    color: var(--light);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

interface LetterProps {
  isVisible: boolean;
}

export const Letter = styled.div<LetterProps>`
  display: inline-block;
  margin-top: 3.2rem;

  text-align: center;
  text-transform: uppercase;

  font-size: 2.4rem;
  font-weight: 700;

  color: ${({ isVisible }) => (isVisible ? "var(--light)" : "transparent")};

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

interface FinalMessageProps {
  isWin: boolean;
}

export const FinalMessage = styled.p<FinalMessageProps>`
  margin-top: 3.2rem;

  color: ${({ isWin }) => (isWin ? "var(--success)" : "var(--error)")};
  font-size: 2.4rem;
  > span {
    font-weight: 700;
    color: var(--light);
    letter-spacing: 2px;
  }
`;
