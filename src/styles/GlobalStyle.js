import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: inherit;
}
html{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  max-width:2000px;
  overflow: auto;
  box-sizing: border-box;
  margin: 0 auto;
}
`;
