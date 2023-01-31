import { ThemeProvider } from "styled-components";
import PokemonContext from "../../stores/contexts/pokemonContext/PokemonContext";
import GlobalStyle from "../../styles/GlobalStyle";
import mainTheme from "../../styles/mainTheme";
import mockPokemonContext from "../mockContexts/mockPokemonContext";

interface TestWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const TestWrapper = ({ children }: TestWrapperProps): JSX.Element => {
  return (
    <PokemonContext.Provider value={mockPokemonContext}>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </PokemonContext.Provider>
  );
};

export default TestWrapper;
