import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  margin: 0 auto;

  .letters {
    display: flex;
    justify-content: center;
  }

  > button {
    display: block;
    margin-top: 4.2rem;
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
