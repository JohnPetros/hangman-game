import { ReactNode, createContext, useContext, useState } from "react";

interface WordProviderData {
  word: string;
  theme: string;
  isThemeModalOpen: boolean;
  setIsThemeModalOpen: (isThemeModalOpen: boolean) => void;
  _setWord: (theme: Theme) => void;
  _resetWord: () => void;
}

interface WordProviderProps {
  children: ReactNode;
}

interface Theme {
  id: number;
  name: string;
  words: string[];
}

const WordContext = createContext<WordProviderData>({} as WordProviderData);

export function WordProvider({ children }: WordProviderProps) {
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(true);
  const [theme, setTheme] = useState("");
  const [word, setWord] = useState("");

  function getRandomWord(words: string[]) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function _setWord(theme: Theme) {
    setWord(getRandomWord(theme.words));
    setTheme(theme.name);

    setIsThemeModalOpen(false);
  }

  function _resetWord() {
    setWord("");
    setTheme("");

    setIsThemeModalOpen(true);
  }

  return (
    <WordContext.Provider
      value={{
        word,
        theme,
        isThemeModalOpen,
        setIsThemeModalOpen,
        _setWord,
        _resetWord,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}

export function useWord() {
  const context = useContext(WordContext);
  return context;
}
