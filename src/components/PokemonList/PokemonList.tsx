import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import PokemonContext from "../../stores/contexts/pokemonContext/PokemonContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonListStyled from "./PokemonListStyled";

const PokemonList = (): JSX.Element => {
  const {
    currentPokemonState: { currentPokemon },
  } = useContext(PokemonContext);

  const { loadAllPokemon } = useApi();
  useEffect(() => {
    (async () => {
      loadAllPokemon();
    })();
  }, [loadAllPokemon]);

  return (
    <>
      <PokemonListStyled className="pokemon">
        <h2 className="pokemon__title">Generation 1</h2>
        <ul className="pokemon__list">
          {currentPokemon.map((pokemon, key) => (
            <PokemonCard pokemon={pokemon} key={key} />
          ))}
        </ul>
      </PokemonListStyled>
    </>
  );
};

export default PokemonList;
