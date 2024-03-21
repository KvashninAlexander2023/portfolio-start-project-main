import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";



export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
  
  font-family: 'Fira Code', -apple-system, BlinkMacSystemFont,  'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${myTheme.colors.colorText};
  /* max-width: 1366px;
  margin: 0 auto; */
  line-height: 1.2em;
  min-width: 360px;
}


a{
  text-decoration: none;
}

ul{
  list-style: none;
}
button{
  background-color: unset;
  border: none;
}

section{
  background-color: ${myTheme.colors.colorBG};
}

`;
