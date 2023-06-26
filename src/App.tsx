import { Game } from "./components/Game";
import { ThemesModal } from "./components/ThemesModal";
import GlobalStyles from "./styles/global";
import { GameProvider, useGame } from "./hooks/useGame";

export function App() {
  const { isThemeModalOpen } = useGame();

  return (
    <GameProvider>
      <Game />
      <ThemesModal isOpen={isThemeModalOpen} />
      <GlobalStyles />
    </GameProvider>
  );
}
