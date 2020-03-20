import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html,body {
  background-color: #083235;
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  }

  *:focus {
  outline: none;
  }
`;

export default GlobalStyle;

