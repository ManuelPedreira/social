import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
#root {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  color-scheme: light dark;
  font-family:  ${({ theme }) => theme.font.family.main};
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

body {
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background.main};
}

* {
  line-height: 1.3rem;
  letter-spacing: 0.02rem;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size};
  color:  ${({ theme }) => theme.color.text.main};
}

a {
  text-decoration: inherit;
}


`;

export default GlobalStyles;
