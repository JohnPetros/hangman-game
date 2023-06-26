import { Hangman } from "../Hangman";
import { Keyboard } from "../Keyboard";
import { Container, Letter } from "./styles";
const word = "html";

export function Game() {
  return (
    <Container>
      <Hangman />

      <div className="letters">
        {word.split("").map((letter, index) => (
          <Letter key={String(index)}>{letter}</Letter>
        ))}
      </div>

      <Keyboard />
    </Container> 
  );
}
