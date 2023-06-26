import { useWord } from "../../hooks/useWord";
import { themes } from "../../utils/themes";
import { Container, Content, Theme } from "./styles";

export function ThemesModal() {
  const { isThemeModalOpen, _setWord } = useWord();

  if (!isThemeModalOpen) return;

  return (
    <Container>
      <Content>
        <h2>Choose one of the following themes</h2>
        <div>
          {themes.map((theme) => (
            <Theme type="button" key={theme.id} onClick={() => _setWord(theme)}>
              {theme.name}
            </Theme>
          ))}
        </div>
      </Content>
    </Container>
  );
}
