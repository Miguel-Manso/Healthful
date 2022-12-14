import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
   
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Alata', sans-serif;




  }
  html, body {
    min-height: 100%;
    width: 100%;
    text-rendering: optimizeLegibility;
   
  }

  #root {
    min-height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle