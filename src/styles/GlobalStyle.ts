import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

  :root {
    --font-base: 'DM Sans', sans-serif;

    --color-heading: ${({ theme }) => theme.heading};
    --color-text: ${({ theme }) => theme.text};
    --color-background: ${({ theme }) => theme.background};
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
    height: 100%;
  }

  body {
    font-family: var(--font-base);
    font-weight: 400;
    line-height: 1.7;
    background-color: var(--color-background);
    color: var(--color-text);
    height: 100%;
    overflow-x: hidden;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    margin: 0 auto;
    text-align: center;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    cursor: pointer;
  }
`;