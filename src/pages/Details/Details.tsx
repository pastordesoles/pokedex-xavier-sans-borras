import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import useApi from "../../hooks/useApi";
import PokemonContext from "../../stores/contexts/pokemonContext/PokemonContext";
import UiContext from "../../stores/contexts/uiContext/UiContext";

const Details = (): JSX.Element => {
  const {
    currentUiState: { isLoading },
  } = useContext(UiContext);

  const {
    currentPokemonState: {
      currentDetailedPokemon: { abilities, height, id, image, name, types },
    },
  } = useContext(PokemonContext);

  const { loadPokemonDetail } = useApi();

  const { pokemonName } = useParams();

  useEffect(() => {
    (async () => loadPokemonDetail(pokemonName!))();
  }, [loadPokemonDetail, pokemonName]);

  return (
    <>
      {isLoading && <Loader />}
      <article>
        <img
          className="pokemon-card__image"
          src={image}
          alt={name}
          width="100"
          height="100"
          loading="lazy"
        ></img>

        <span>ID: {id}</span>
        <span>Type:{types}</span>
        <span>Height:{height}</span>
        <span>Abilities:</span>
        {abilities && (
          <ul>
            <li>{abilities.abilityOne}</li>
            <li>{abilities.abilityTwo}</li>
          </ul>
        )}

        <h3 className="pokemon-card__title">{name}</h3>
      </article>
    </>
  );
};

export default Details;
