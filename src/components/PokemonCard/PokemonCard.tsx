import { Link } from "react-router-dom";
import { PokemonData } from "../../hooks/types";
import capitalize from "../../utils/capitalize";
import PokemonCardStyled from "./PokemonCardStyled";

interface PokemonCardProps {
  pokemon: PokemonData;
}

const PokemonCard = ({
  pokemon: { image, name },
}: PokemonCardProps): JSX.Element => {
  return (
    <PokemonCardStyled className="pokemon-card">
      <article>
        <img
          className="pokemon-card__image"
          src={image}
          alt={name}
          width="100"
          height="100"
          loading="lazy"
        ></img>

        <Link to={`/pokemon/${name}`}>
          <h3 className="pokemon-card__title">{capitalize(name)}</h3>
        </Link>
      </article>
    </PokemonCardStyled>
  );
};

export default PokemonCard;
