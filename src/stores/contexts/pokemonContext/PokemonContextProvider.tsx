import { useReducer } from "react";
import pokemonReducer from "../../reducers/pokemonReducer/pokemonReducer";
import PokemonContext from "./PokemonContext";

interface PokemonContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PokemonContextProvider = ({ children }: PokemonContextProviderProps) => {
  const [currentPokemonState, dispatch] = useReducer(pokemonReducer, []);

  return (
    <PokemonContext.Provider value={{ currentPokemonState, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
