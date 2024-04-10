import { Theme } from "./styled";

const lightTheme: Theme = {
  color: {
    background: {
      main: "#eee",
      light: "#d5d5d5",
    },
    primary: {
      main: "#aaa",
      light: "#999",
      dark: "#d5d5d5",
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
      main: "#111",
      dark: "#666",
      darker: "#999",
      lighter: "#000",
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

export default lightTheme;
