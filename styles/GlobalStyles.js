import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body,
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Jost", sans-serif;
}
a{
  cursor: pointer;
  height: min-content;
  outline: none;
  text-decoration: none !important;
  padding: 5px;
  color: #1070ca;

  &:hover{
    text-decoration: underline !important;
    color: #208aed;
  }

  &.non-active{
    pointer-events: none;
    cursor: default;
    text-decoration: none;
    color: #313131;
  }
}
`;
