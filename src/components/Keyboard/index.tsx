import { useEffect } from "react";
import { Container, Letter } from "./styles";
const letters = "qerwtyuiopasdfghjklzxcvbnm";

interface KeyboardProps {
  onClick: (letter: string) => void;
  onKeyDown: (letter: string) => void;
  correctedLetters: string[];
  incorrectedLetters: string[];
}

export function Keyboard({
  onClick,
  onKeyDown,
  correctedLetters,
  incorrectedLetters,
}: KeyboardProps) {
  function isLetterCorrect(letter: string) {
    return correctedLetters.includes(letter);
  }

  function isLetterIncorrect(letter: string) {
    return incorrectedLetters.includes(letter);
  }

  function handleKeyDown(event: KeyboardEvent) {
    const { key } = event;
    const isLetter = letters.includes(key);
    if (!isLetter) return;

    const isTyped = isLetterCorrect(key) || isLetterIncorrect(key);
    if (!isTyped) onKeyDown(key);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onKeyDown]);

  return (
    <Container>
      {letters.split("").map((letter) => {
        const isCorrect = isLetterCorrect(letter);
        const isIncorrect = isLetterIncorrect(letter);

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
