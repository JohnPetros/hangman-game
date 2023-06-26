import { Container } from "./styles";

const limbs = [
  <circle key="head" cx="140" cy="70" r="20" />,
  <line key="right-hand" x1="140" y1="90" x2="140" y2="150" />,
  <line key="body" x1="140" y1="120" x2="120" y2="100" />,
  <line key="left-hand" x1="140" y1="120" x2="160" y2="100" />,
  <line key="rigth-leg" x1="140" y1="150" x2="120" y2="180" />,
  <line key="left-leg" x1="140" y1="150" x2="160" y2="180" />,
];

interface HangmanProps {
  errors: number;
}

export function Hangman({ errors }: HangmanProps) {
  return (
    <Container height="250" width="200">
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {limbs.slice(0, errors).map((limp) => limp)}
    </Container>
  );
}
