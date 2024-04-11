import { ThemeProvider } from "styled-components";
import useThemeModeContext from "../ThemeModeContext/useThemeModeContext";
import darkTheme from "../../theme/darkTheme";
import lightTheme from "../../theme/lightTheme";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useThemeModeContext();

  const getTheme = () => {
    if (themeMode === "lightMode") return lightTheme;
    else return darkTheme;
  };

  return <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
