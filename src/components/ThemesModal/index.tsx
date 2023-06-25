import { Container, Content, Theme } from "./styles";

export function ThemesModal() {
  return (
    <Container>
      <Content>
        <h2>Choose one of the following themes</h2>
        <div>
          <Theme type="button">Programing 💻</Theme>
          <Theme>Programing 💻</Theme>
          <Theme>Programing 💻</Theme>
          <Theme>Programing 💻</Theme>
          <Theme>Programing 💻</Theme>
          <Theme>Programing 💻</Theme>
        </div>
      </Content>
    </Container>
  );
}
