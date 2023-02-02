import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import PokemonContext from "../../stores/contexts/pokemonContext/PokemonContext";
import UiContext from "../../stores/contexts/uiContext/UiContext";
import Loader from "../Loader/Loader";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonListStyled from "./PokemonListStyled";

const PokemonList = (): JSX.Element => {
  const {
    currentPokemonState: { currentPokemon },
  } = useContext(PokemonContext);

  const {
    currentUiState: { isLoading },
  } = useContext(UiContext);

  const { loadAllPokemon } = useApi();
  useEffect(() => {
    (async () => {
      loadAllPokemon();
    })();
  }, [loadAllPokemon]);

  return (
    <>
      <PokemonListStyled className="pokemon">
        <aside>
          <img
            src="/images/immfly.png"
            alt="Immfly"
            width="100"
            height="100"
            className="immfly"
          />
          <img
            src="/images/pokemonTitle.png"
            alt="Pokemon"
            width="400"
            height="400"
          />
          <h2 className="pokemon__title">Generation 1</h2>
          <span>{`${currentPokemon.length} Pokemon`}</span>
        </aside>

        {isLoading && <Loader />}
        {!isLoading && (
          <ul className="pokemon__list">
            {currentPokemon.map((pokemon, key) => (
              <PokemonCard pokemon={pokemon} key={key} />
            ))}
          </ul>
        )}
      </PokemonListStyled>
    </>
  );
};

export default PokemonList;
