import { createContext, useState } from "react";

type ThemeModes = "lightMode" | "darkMode";

export type ThemeModeTypes = {
  themeMode: ThemeModes;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModes>>;
};

export const ThemeModeContext = createContext<ThemeModeTypes>({
  themeMode: "darkMode",
  setThemeMode: () => {},
});

const ThemeModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeMode, setThemeMode] = useState<ThemeModes>("darkMode");

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeContextProvider;
