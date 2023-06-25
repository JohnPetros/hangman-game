import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
  :root {
    --primary: #34495e;
    --secondary: #9580ff;
    --tertiary: #d6d6e7;

    --dark: #22212c;
    --light: #f8f8f2;

    --success: #8aff80;
    --error: #d8334a;

    --border-radius: 0.4rem;
    --shadow: 0 2px 4px rgba(45, 35, 66, 0.4),
      0 7px 13px -3px rgba(45, 35, 66, 0.3), 0 -1px 0 var(--tertiary) inset;

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

  main {
    max-width: 1200px;
    margin: 0 auto;
  }

  button {
    border: none;
    cursor: pointer;
  }
`}`;
