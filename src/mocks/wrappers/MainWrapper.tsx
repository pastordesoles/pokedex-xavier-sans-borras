import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PokemonContextProvider from "../../stores/contexts/pokemonContext/PokemonContextProvider";
import GlobalStyle from "../../styles/GlobalStyle";
import mainTheme from "../../styles/mainTheme";

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
