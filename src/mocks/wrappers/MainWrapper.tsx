import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PokemonContextProvider from "../../stores/contexts/pokemonContext/PokemonContextProvider";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";
import UiContextProvider from "../../stores/contexts/uiContext/UiContextProvider";

interface MainWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const MainWrapper = ({ children }: MainWrapperProps): JSX.Element => {
  return (
    <PokemonContextProvider>
      <UiContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </UiContextProvider>
    </PokemonContextProvider>
  );
};

export default MainWrapper;
