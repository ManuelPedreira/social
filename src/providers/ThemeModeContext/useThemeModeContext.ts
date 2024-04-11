import { useContext } from "react";
import { ThemeModeContext, ThemeModeTypes } from ".";

const useThemeModeContext = () => {
  return useContext(ThemeModeContext) as ThemeModeTypes;
};

export default useThemeModeContext;
