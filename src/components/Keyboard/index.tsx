import { Container, Letter } from "./styles";
const letters = "qerwtyuiopasdfghjklzxcvbnm";

interface KeyboardProps {
  onClick: (letter: string) => void;
}

export function Keyboard({ onClick }: KeyboardProps) {
  return (
    <Container>
      {letters.split("").map((letter) => (
        <Letter key={letter} onClick={() => onClick(letter)}>
          {letter}
        </Letter>
      ))}
    </Container>
  );
}
