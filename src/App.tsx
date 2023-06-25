import { Game } from "./components/Game"
import { ThemesModal } from "./components/ThemesModal";
import GlobalStyles from "./styles/global";

export function App() {
  return (
    <main>
      <Game />
      {/* <ThemesModal /> */}
      <GlobalStyles />
    </main>
  );
}
