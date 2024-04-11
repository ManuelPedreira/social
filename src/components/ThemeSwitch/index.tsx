import useThemeModeContext from "../../providers/ThemeModeContext/useThemeModeContext";
import DarkModeSVG from "../svg/DarkModeSVG";
import { StyledButton } from "./ThemeSwitch.styled";

const ThemeSwitch = () => {
  const { themeMode, setThemeMode } = useThemeModeContext();

  const switchTheme = () => {
    setThemeMode((currentTheme) => {
      if (currentTheme === "lightMode") return "darkMode";
      else return "lightMode";
    });
  };

  return (
    <StyledButton mode={themeMode} onClick={switchTheme}>
      <DarkModeSVG />
    </StyledButton>
  );
};

export default ThemeSwitch;
