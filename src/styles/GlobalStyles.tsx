import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

type GlobalStylesType = {
  color?: string;
  secondary?: string;
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
  margin: 0;
  font-family: 'Fira Code', -apple-system, BlinkMacSystemFont,  'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${myTheme.color.colorText};
  max-width: 1366px;
  margin: 0 auto;
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
`;
