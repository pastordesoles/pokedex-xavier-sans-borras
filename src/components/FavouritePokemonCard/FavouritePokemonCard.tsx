import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../hooks/useApi";
import { PokemonStats } from "../../hooks/types";
import FavouritePokemonCardStyled from "./FavouritePokemonCardStyled";

interface FavouritePokemonCardProps {
  pokemon: PokemonStats;
}

const FavouritePokemonCard = ({
  pokemon: { abilities, height, id, image, name, types },
}: FavouritePokemonCardProps): JSX.Element => {
  const { deleteOnePokemon } = useApi();

  return (
    <>
      <FavouritePokemonCardStyled>
        <article className="pokemon-card">
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
            className="delete"
            data-testid="delete"
            icon={faXmark}
            onClick={() => deleteOnePokemon(`${id}`)}
          />

          <div className="pokemon-card-stats">
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
      </FavouritePokemonCardStyled>
    </>
  );
};

export default FavouritePokemonCard;
