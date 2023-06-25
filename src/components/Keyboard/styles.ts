import styled from "styled-components";

export const Container = styled.div`
  width: 540px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;

  margin-top: 3.2rem;
`;

export const Letter = styled.button`
  background-color: var(--light);
  color: var(--dark);

  font-size: 1.6rem;
  font-weight: 700;

  text-transform: uppercase;

  padding: 0.8em;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);

  width: 4.2rem;
  height: 4.2rem;

  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;
