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
        <article>
          <img src="/images/immfly.png" alt="Immfly" />
          <img src="/images/pokemonTitle.png" alt="Pokemon" />
          <h2 className="pokemon__title">Generation 1</h2>
          <span>{`${currentPokemon.length} Pokemon`}</span>
          <ul className="pokemon__list">
            {currentPokemon.map((pokemon, key) => (
              <PokemonCard pokemon={pokemon} key={key} />
            ))}
          </ul>
        </article>
      </PokemonListStyled>
    </>
  );
};

export default PokemonList;
