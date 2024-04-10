// import original module declarations
import "styled-components";

export type Theme = {
  color: {
    background: {
      main: string;
      light: string;
    };
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    secondary: {
      main: string;
      dark: string;
      darker: string;
      transparent: string;
    };
    error: {
      main: string;
      dark: string;
      darker: string;
      warning: string;
    };
    text: {
      main: string;
      dark: string;
      darker: string;
      lighter: string;
    };
  };
  font: {
    family: {
      main: string;
      slim: string;
    };
    weight: {
      normal: string;
      bold: string;
      slim: string;
    };
    size: string;
  };
};

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
