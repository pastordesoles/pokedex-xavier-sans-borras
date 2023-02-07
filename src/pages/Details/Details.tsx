import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../components/Loader/Loader";
import useApi from "../../hooks/useApi";
import PokemonContext from "../../stores/contexts/pokemonContext/PokemonContext";
import UiContext from "../../stores/contexts/uiContext/UiContext";
import DetailsStyled from "./DetailsStyled";
import { Link } from "react-router-dom";

const Details = (): JSX.Element => {
  const {
    currentUiState: { isLoading },
  } = useContext(UiContext);

  const {
    currentPokemonState: {
      currentDetailedPokemon: { abilities, height, id, image, name, types },
      currentDetailedPokemon,
    },
  } = useContext(PokemonContext);

  const { loadPokemonDetail, addOnePokemon } = useApi();

  const { pokemonName } = useParams();

  useEffect(() => {
    (async () => loadPokemonDetail(pokemonName!))();
  }, [loadPokemonDetail, pokemonName]);

  return (
    <>
      {isLoading && <Loader />}
      <DetailsStyled>
        <article className="pokemon-card">
          <Link to={`/pokemon`}>
            <FontAwesomeIcon className="return" icon={faXmark} />
          </Link>
          <div className="pokemon-card-basic">
            <img
              className="pokemon-card-basic__image"
              src={image}
              alt={name}
              width="100"
              height="100"
              loading="lazy"
            ></img>

            <h3 className="pokemon-card-basic__title">{name}</h3>
          </div>

          <FontAwesomeIcon
            className="favourite"
            icon={faHeart}
            onClick={() => addOnePokemon(currentDetailedPokemon)}
          />

          <div className="pokemon-card-stats">
            <span>
              <span className="bold">ID:</span> {id}
            </span>
            <span>
              <span className="bold">Type: </span>
              {types}
            </span>
            <span>
              <span className="bold">Height: </span>
              {height}
            </span>
            <span>
              <span className="bold">Abilities:</span>
            </span>
            {abilities && (
              <ul>
                <li> {abilities.abilityOne}</li>
                <li> {abilities.abilityTwo}</li>
              </ul>
            )}
          </div>
        </article>
      </DetailsStyled>
    </>
  );
};

export default Details;
