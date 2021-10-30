import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
     font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.6rem;
  }

   *,
   *::before,
   *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }
   
   img {
      max-width: 100%;
      vertical-align: top;
   }

`;

export default GlobalStyle;
