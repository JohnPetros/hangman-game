import { ReactNode, createContext, useContext, useState } from "react";

interface GameProviderData {
  word: string;
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

  function getRandomWord(words: string[]) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function initGame(theme: Theme) {
    setTheme(theme.name);
    setWord(getRandomWord(theme.words));

    setIsThemeModalOpen(false);
  }

  return (
    <GameContext.Provider
      value={{ word, theme, isThemeModalOpen, setIsThemeModalOpen, initGame }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  return context;
}
