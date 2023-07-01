import { useState } from "react";
import { useWord } from "../../hooks/useWord";
import { Hangman } from "../Hangman";
import { Keyboard } from "../Keyboard";
import { Container, Letter, FinalMessage } from "./styles";

export function Game() {
  const { word, _resetWord, theme } = useWord();
  const [errorsAmount, setErrorsAmount] = useState(0);
  const [correctedLetters, setCorrectedLetters] = useState<string[]>([]);
  const [incorrectedLetters, setIncorrectedsLetters] = useState<string[]>([]);
  const [endGameMessage, setEndGameMessage] = useState("");

  function handleResetButtonClick() {
    setErrorsAmount(0);
    setCorrectedLetters([]);
    setIncorrectedsLetters([]);
    setEndGameMessage("");

    _resetWord();
  }

  function handleTypedLetter(letter: string) {
    const isCorrect = word.includes(letter);

    if (isCorrect) {
      setCorrectedLetters((currentCorrectedLetters) => [
        ...currentCorrectedLetters,
        letter,
      ]);

      if (correctedLetters.length === word.length - 1) {
        setEndGameMessage("You won 😁!");
      }

      return;
    }

    setIncorrectedsLetters((currentIncorrectedLetters) => [
      ...currentIncorrectedLetters,
      letter,
    ]);

    const newErrorsAmount = errorsAmount + 1;
    setErrorsAmount(newErrorsAmount);
    console.log({ errorsAmount });
    console.log({ letter });

    if (newErrorsAmount === 6) {
      setEndGameMessage("You lost 😢!");
    }
  }

  return (
    <Container>
      <h1>Hangman Game</h1>

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

      <p className="theme">
        Theme: <strong>{theme}</strong>
      </p>

      {endGameMessage ? (
        <FinalMessage isWin={endGameMessage.includes("won")}>
          {endGameMessage + "\nThe word was: "}{" "}
          <span>{word.toUpperCase()}</span>
        </FinalMessage>
      ) : (
        <Keyboard
          onClick={handleTypedLetter}
          onKeyDown={handleTypedLetter}
          correctedLetters={correctedLetters}
          incorrectedLetters={incorrectedLetters}
        />
      )}

      <button type="button" onClick={handleResetButtonClick}>
        Reset game
      </button>
    </Container>
  );
}
