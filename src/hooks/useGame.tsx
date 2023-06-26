import { ReactNode, createContext, useContext, useState } from "react";

interface GameProviderData {
  theme: string;
  isThemeModalOpen: boolean;
  setIsThemeModalOpen: (isThemeModalOpen: boolean) => void;
  initGame: (theme: Theme) => void;
}

interface GameProviderProps {
  children: ReactNode;
}

interface Theme {
  id: number;
  name: string;
  words: string[];
}

const GameContext = createContext<GameProviderData>({} as GameProviderData);

export function GameProvider({ children }: GameProviderProps) {
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(true);
  const [theme, setTheme] = useState("");
  const [word, setWord] = useState("");

  function getRandomWord(words: string[]) {}

  function initGame(theme: Theme) {
    setTheme(theme.name);
    console.log(theme.words);

    setIsThemeModalOpen(false);
  }

  return (
    <GameContext.Provider
      value={{ theme, isThemeModalOpen, setIsThemeModalOpen, initGame }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  return context;
}
