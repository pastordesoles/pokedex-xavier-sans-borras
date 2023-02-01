import { useCallback, useContext } from "react";
import { loadPokemonActionsCreator } from "../stores/actions/pokemonActions/pokemonActionCreators";
import {
  isLoadingFalseActionCreator,
  isLoadingTrueActionCreator,
} from "../stores/actions/uiActions/uiActionCreators";
import PokemonContext from "../stores/contexts/pokemonContext/PokemonContext";
import UiContext from "../stores/contexts/uiContext/UiContext";
import { PokemonData, PokemonDetail, PokemonName } from "./types";

const useApi = () => {
  const { dispatch: dispatchPokemon } = useContext(PokemonContext);
  const { dispatch: dispatchUi } = useContext(UiContext);
  let newUrl = process.env.REACT_APP_API_URL!;
  let details = process.env.REACT_APP_API_URL_DETAILS!;

  const loadAllPokemon = useCallback(async () => {
    dispatchUi(isLoadingTrueActionCreator());
    try {
      const response = await fetch(newUrl);
      const { results } = (await response.json()) as PokemonName;

      const pokemonData: PokemonData[] = [];

      results.forEach((pokemon) => {
        pokemonData.push({
          name: pokemon.name,
          image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
        });
      });
      dispatchUi(isLoadingFalseActionCreator());
      dispatchPokemon(loadPokemonActionsCreator(pokemonData));
    } catch (error: unknown) {
      throw error;
    }
  }, [dispatchPokemon, dispatchUi, newUrl]);

  const loadPokemonDetail = useCallback(
    async (name: string) => {
      const detailsUrl = `${details}${name}`;
      try {
        const response = await fetch(detailsUrl);
        const detailedPokemon = (await response.json()) as PokemonDetail;

        detailedPokemon.image = `https://img.pokemondb.net/sprites/black-white/anim/normal/${detailedPokemon.name}.gif`;
      } catch (error: unknown) {
        throw error;
      }
    },
    [details]
  );

  return { loadAllPokemon, loadPokemonDetail };
};

export default useApi;
