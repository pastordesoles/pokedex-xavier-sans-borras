import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import PokemonContextProvider from "./stores/contexts/pokemonContext/PokemonContextProvider";
import GlobalStyle from "./styles/GlobalStyle";
import mainTheme from "./styles/mainTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PokemonContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PokemonContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
