import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PokemonContextProvider from "../../stores/contexts/pokemonContext/PokemonContextProvider";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";

interface MainWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const MainWrapper = ({ children }: MainWrapperProps): JSX.Element => {
  return (
    <PokemonContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </PokemonContextProvider>
  );
};

export default MainWrapper;
