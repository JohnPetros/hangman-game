import { Container, Letter } from "./styles";
const letters = "qerwtyuiopasdfghjklzxcvbnm";

interface KeyboardProps {
  onClick: (letter: string) => void;
  correctedLetters: string[];
  incorrectedLetters: string[];
}

export function Keyboard({
  onClick,
  correctedLetters,
  incorrectedLetters,
}: KeyboardProps) {
  return (
    <Container>
      {letters.split("").map((letter) => {
        const isCorrect = correctedLetters.includes(letter);
        const isIncorrect = incorrectedLetters.includes(letter);

        return (
          <Letter
            isCorrect={isCorrect}
            isIncorrect={isIncorrect}
            key={letter}
            onClick={() => onClick(letter)}
            disabled={isCorrect || isIncorrect}
          >
            {letter}
          </Letter>
        );
      })}
    </Container>
  );
}
