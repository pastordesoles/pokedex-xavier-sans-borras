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
      <img
        className="pokemon-card__image"
        src={image}
        alt={name}
        width="100"
        height="100"
        loading="lazy"
      ></img>

      <h3 className="pokemon-card__title">{capitalize(name)}</h3>
    </PokemonCardStyled>
  );
};

export default PokemonCard;
