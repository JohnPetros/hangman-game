import { useGame } from "../../hooks/useGame";
import { Hangman } from "../Hangman";
import { Keyboard } from "../Keyboard";
import { Container, Letter } from "./styles";

export function Game() {
  const { word } = useGame();

  return (
    <Container>
      <Hangman />

      <div className="letters">
        {word.split("").map((letter, index) => (
          <Letter key={String(index)}>{letter}</Letter>
        ))}
      </div>

      <Keyboard />

      <button type="button">Reset game</button>
    </Container>
  );
}
