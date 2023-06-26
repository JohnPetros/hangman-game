import { useState } from "react";
import { useGame } from "../../hooks/useGame";
import { Hangman } from "../Hangman";
import { Keyboard } from "../Keyboard";
import { Container, Letter, FinalMessage } from "./styles";

export function Game() {
  const { word } = useGame();
  const [errorsAmount, setErrorsAmount] = useState(0);
  const [correctedLetters, setCorrectedLetters] = useState<string[]>([]);
  const [incorrectedLetters, setIncorrectedsLetters] = useState<string[]>([]);
  const [endGameMessage, setEndGameMessage] = useState("");

  function handleClickedLetter(letter: string) {
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

    const newErrorsAmount = errorsAmount + 1;
    setErrorsAmount(newErrorsAmount);

    if (correctedLetters.length === word.length) {
      setEndGameMessage("You won 😁!");
    } else if (newErrorsAmount === 6) {
      setEndGameMessage("You lost 😢!");
    }
  }

  return (
    <Container>
      <Hangman errorsAmount={errorsAmount} />

      <div className="letters">
        {word.split("").map((letter, index) => (
          <Letter
            isVisible={correctedLetters.includes(letter)}
            key={String(index)}
          >
            {letter}
          </Letter>
        ))}
      </div>

      {endGameMessage ? (
        <FinalMessage isWin={endGameMessage.includes("won")}>
          {endGameMessage + "\nThe word was: "} <span>{word}</span>
        </FinalMessage>
      ) : (
        <Keyboard
          onClick={handleClickedLetter}
          correctedLetters={correctedLetters}
          incorrectedLetters={incorrectedLetters}
        />
      )}

      <button type="button">Reset game</button>
    </Container>
  );
}
