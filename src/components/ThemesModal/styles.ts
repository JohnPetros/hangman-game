import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: var(--dark);

  width: 450px;
  max-width: 100%;
  padding: 3.2rem;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);

  h2 {
    color: var(--secondary);
    text-align: center;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;

    margin-top: 2.4rem;
  }
`;

export const Theme = styled.button`
  color: var(--light);
  background-color: var(--primary);

  font-size: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;

  height: 4rem;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: translateY(2px);
  }
`;
