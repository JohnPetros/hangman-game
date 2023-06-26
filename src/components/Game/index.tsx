import { useState } from "react";
import { useGame } from "../../hooks/useGame";
import { Hangman } from "../Hangman";
import { Keyboard } from "../Keyboard";
import { Container, Letter } from "./styles";

export function Game() {
  const { word } = useGame();
  const [errors, setErrors] = useState(0);
  const [correctedLetters, setCorrectedLetters] = useState<string[]>([]);
  const [incorrectedLetters, setIncorrectedsLetters] = useState<string[]>([]);
  console.log(correctedLetters, incorrectedLetters);

  function handleClickedLetter(letter: string) {
    const isVerified =
      correctedLetters.includes(letter) || incorrectedLetters.includes(letter);

    if (isVerified) return;

    const isCorrect = word.includes(letter);

    if (isCorrect) {
      setCorrectedLetters((currentCorrectedLetters) => [
        ...currentCorrectedLetters,
        letter,
      ]);
      return;
    }

    setIncorrectedsLetters((currentIncorrectedLetters) => [
      ...currentIncorrectedLetters,
      letter,
    ]);
  }

  return (
    <Container>
      <Hangman errors={errors} />

      <div className="letters">
        {word.split("").map((letter, index) => (
          <Letter key={String(index)}>{letter}</Letter>
        ))}
      </div>

      <Keyboard onClick={handleClickedLetter} />

      <button type="button">Reset game</button>
    </Container>
  );
}
