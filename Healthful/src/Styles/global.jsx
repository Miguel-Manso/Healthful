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
    height: 100vh;
    width: 100vw;
    text-rendering: optimizeLegibility;
   
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle