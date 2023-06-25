import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
  :root {
    /* --primary: #34495E; */
    --primary: #22212c;
    --secondary: #9580ff;
    --light: #f8f8f2;

    --success: #8aff80;
    --error: #d8334a;

    font-size: 62.5%;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100vh;
    
    font-size: 1.6rem;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;

    background-color: var(--primary);
  }

  button {
    cursor: pointer;
  }
`}`;
