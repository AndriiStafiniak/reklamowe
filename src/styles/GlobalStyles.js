import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
  }
`;

export default GlobalStyles;
