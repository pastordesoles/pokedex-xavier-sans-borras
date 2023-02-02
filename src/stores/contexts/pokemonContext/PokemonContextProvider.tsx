import { useReducer } from "react";
import { PokemonDetail } from "../../../hooks/types";
import pokemonReducer from "../../reducers/pokemonReducer/pokemonReducer";
import PokemonContext from "./PokemonContext";
import { CurrentPokemonState } from "./types";

interface PokemonContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PokemonContextProvider = ({ children }: PokemonContextProviderProps) => {
  const [currentPokemonState, dispatch] = useReducer(pokemonReducer, {
    currentPokemon: [],
    currentDetailedPokemon: {} as PokemonDetail,
  } as CurrentPokemonState);

  return (
    <PokemonContext.Provider value={{ currentPokemonState, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
