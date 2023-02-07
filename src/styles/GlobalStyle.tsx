import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  font-family: sans-serif;
  scroll-behavior: smooth;
  
}
body {
  background-color: ${(props) => props.theme.colors.mainColors.gray};
}
button,
select {
  font: inherit;
}

button,
a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
h2, h3 {
  color: ${(props) => props.theme.colors.mainColors.dark};
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
}
:focus-visible {
    outline: none;
  }
`;

export default GlobalStyle;
