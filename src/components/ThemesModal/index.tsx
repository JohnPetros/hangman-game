import { useGame } from "../../hooks/useGame";
import { themes } from "../../utils/themes";
import { Container, Content, Theme } from "./styles";

export function ThemesModal() {
  const { isThemeModalOpen, initGame } = useGame();

  if (!isThemeModalOpen) return;

  return (
    <Container>
      <Content>
        <h2>Choose one of the following themes</h2>
        <div>
          {themes.map((theme) => (
            <Theme type="button" key={theme.id} onClick={() => initGame(theme)}>
              {theme.name}
            </Theme>
          ))}
        </div>
      </Content>
    </Container>
  );
}
