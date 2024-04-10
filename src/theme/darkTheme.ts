import { Theme } from "./styled";

const darkTheme: Theme = {
  color: {
    background: {
      main: "#000",
      light: "#202327",
    },
    primary: {
      main: "#30343a",
      light: "#71767b",
      dark: "#202327",
    },
    secondary: {
      main: "#1d9bf0",
      dark: "#1984cc",
      darker: "#125988",
      transparent: "rgba(29, 155, 240, 0.7)",
    },
    error: {
      main: "#c20d0d",
      dark: "#8f0e0e",
      darker: "#590d0d",
      warning: "#d5be1e",
    },
    text: {
      main: "#e7e9ea",
      dark: "#9B9C9A",
      darker: "#71767b",
      lighter: "#fff",
    },
  },
  font: {
    family: {
      main: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      slim: '"Segoe UI", Helvetica, Arial, sans-serif',
    },
    weight: {
      normal: "400",
      bold: "700",
      slim: "200",
    },
    size: "15px",
  },
};

export default darkTheme;
