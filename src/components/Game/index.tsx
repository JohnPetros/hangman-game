import { Hangman } from "../Hangman";
import { Keyboard } from "../Keyboard";
import { Container } from "./styles";

export function Game() {
  return (
    <Container>
      <Hangman />
      <Keyboard />
    </Container>
  );
}
