import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import PokemonContext from "../../stores/contexts/pokemonContext/PokemonContext";
import UiContext from "../../stores/contexts/uiContext/UiContext";
import FavouritePokemonCard from "../FavouritePokemonCard/FavouritePokemonCard";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchFilter from "../SearchFilter/SearchFilter";
import PokemonListStyled from "./PokemonListStyled";

interface PokemonListProps {
  isFavourite: boolean;
}

const PokemonList = ({ isFavourite }: PokemonListProps): JSX.Element => {
  const {
    currentPokemonState: { currentPokemon, currentFavouritePokemon },
  } = useContext(PokemonContext);

  const {
    currentUiState: { isLoading, isOpen },
  } = useContext(UiContext);

  const { loadAllPokemon, loadAllFavouritePokemon } = useApi();
  useEffect(() => {
    (async () => {
      loadAllPokemon();
    })();
  }, [loadAllFavouritePokemon, loadAllPokemon]);

  useEffect(() => {
    (async () => {
      loadAllFavouritePokemon();
    })();
  }, [loadAllFavouritePokemon]);

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
          {!isLoading && !isFavourite && (
            <span>{`${currentPokemon.length} Pokemon`}</span>
          )}

          {!isLoading && isFavourite && (
            <span>{`${currentFavouritePokemon.length} Pokemon`}</span>
          )}
          {!isLoading && !isFavourite && <SearchFilter />}
        </aside>

        {isLoading && <Loader />}
        {!isLoading && !isFavourite && (
          <ul className="pokemon__list">
            {currentPokemon.map((pokemon, key) => (
              <PokemonCard pokemon={pokemon} key={key} />
            ))}
          </ul>
        )}

        {!isLoading && isFavourite && (
          <ul className="pokemon__list">
            {currentFavouritePokemon.map((pokemon) => (
              <FavouritePokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
          </ul>
        )}
      </PokemonListStyled>
      {isOpen && <Modal />}
    </>
  );
};

export default PokemonList;
