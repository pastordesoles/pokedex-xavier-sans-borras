import { ThemeProvider } from "styled-components";
import PokemonContext from "../../stores/contexts/pokemonContext/PokemonContext";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";
import mockPokemonContext from "../mockContexts/mockPokemonContext";
import UiContext from "../../stores/contexts/uiContext/UiContext";
import mockUiContext from "../mockContexts/mockUiContext";
import { BrowserRouter } from "react-router-dom";

interface TestWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const TestWrapper = ({ children }: TestWrapperProps): JSX.Element => {
  return (
    <PokemonContext.Provider value={mockPokemonContext}>
      <UiContext.Provider value={mockUiContext}>
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </UiContext.Provider>
    </PokemonContext.Provider>
  );
};

export default TestWrapper;
