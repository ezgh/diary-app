import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;

}

body{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 16px;
  background-color:#FFFFFF;

}
`;
