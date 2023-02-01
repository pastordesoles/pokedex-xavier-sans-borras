import { useEffect } from "react";
import { useParams } from "react-router";
import useApi from "../../hooks/useApi";

const Details = (): JSX.Element => {
  const { loadPokemonDetail } = useApi();

  const { pokemonName } = useParams();

  useEffect(() => {
    (async () => loadPokemonDetail(pokemonName!))();
  }, [loadPokemonDetail, pokemonName]);

  return <h1>Details</h1>;
};

export default Details;
