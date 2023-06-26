import { Game } from "./components/Game";
import { ThemesModal } from "./components/ThemesModal";
import GlobalStyles from "./styles/global";
import { WordProvider } from "./hooks/useWord";

export function App() {
  return (
    <WordProvider>
      <Game />
      <ThemesModal />
      <GlobalStyles />
    </WordProvider>
  );
}
