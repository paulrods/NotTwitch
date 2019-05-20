import { createGlobalStyle } from "styled-components";
import styledSanitize from "styled-sanitize";

const GlobalStyles = createGlobalStyle`
    ${styledSanitize}

html {
  font-size: 10px;
}
body {
  background: #fafafa;
  margin: 0;
  
  color: #101010;
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  direction: ltr;
  font-feature-settings: "kern";
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-scroll-behavior: smooth;
  -moz-scroll-behavior: smooth;
  -ms-scroll-behavior: smooth;
  scroll-behavior: smooth;
}
`;

export default GlobalStyles;
