import { Game } from "./components/Game";
import { ThemesModal } from "./components/ThemesModal";
import GlobalStyles from "./styles/global";
import { GameProvider } from "./hooks/useGame";

export function App() {
  return (
    <GameProvider>
      <Game />
       <ThemesModal />
      <GlobalStyles />
    </GameProvider>
  );
}
