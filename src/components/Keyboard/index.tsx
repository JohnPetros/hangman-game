import { Container, Letter } from "./styles";
const letters = 'qerwtyuiopasdfghjklzxcvbnm' ;

export function Keyboard() {
  return (
    <Container>
      {letters.split("").map(letter => <Letter key={letter}>{letter}</Letter>)}
    </Container>
  );
}
