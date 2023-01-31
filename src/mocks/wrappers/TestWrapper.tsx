import PokemonContext from "../../stores/contexts/pokemonContext/PokemonContext";
import mockPokemonContext from "../mockContexts/mockPokemonContext";

interface TestWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const TestWrapper = ({ children }: TestWrapperProps): JSX.Element => {
  return (
    <PokemonContext.Provider value={mockPokemonContext}>
      {children}
    </PokemonContext.Provider>
  );
};

export default TestWrapper;
