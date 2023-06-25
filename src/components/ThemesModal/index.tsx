import { Container, Content, Theme } from "./styles";
import { themes } from "../../utils/themes";

export function ThemesModal() {
  return (
    <Container>
      <Content>
        <h2>Choose one of the following themes</h2>
        <div>
          {themes.map((theme) => (
            <Theme type="button" key={theme.id}>
              {theme.name}
            </Theme>
          ))}
        </div>
      </Content>
    </Container>
  );
}
