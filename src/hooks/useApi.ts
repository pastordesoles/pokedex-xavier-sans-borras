import { useCallback, useContext } from "react";
import {
  loadPokemonActionsCreator,
  loadPokemonDetailsActionsCreator,
} from "../stores/actions/pokemonActions/pokemonActionCreators";
import {
  isLoadingFalseActionCreator,
  isLoadingTrueActionCreator,
} from "../stores/actions/uiActions/uiActionCreators";
import PokemonContext from "../stores/contexts/pokemonContext/PokemonContext";
import UiContext from "../stores/contexts/uiContext/UiContext";
import capitalize from "../utils/capitalize";
import { PokemonData, PokemonDetail, PokemonName, PokemonStats } from "./types";

const useApi = () => {
  const { dispatch: dispatchPokemon } = useContext(PokemonContext);
  const { dispatch: dispatchUi } = useContext(UiContext);
  let newUrl = process.env.REACT_APP_API_URL!;
  let details = process.env.REACT_APP_API_URL_DETAILS!;

  const loadAllPokemon = useCallback(
    async (name?: string) => {
      dispatchUi(isLoadingTrueActionCreator());
      try {
        if (name) {
          const detailsUrl = `${details}${name.toLowerCase()}`;
          const response = await fetch(detailsUrl);

          const results = (await response.json()) as PokemonDetail;
          const pokemonData: PokemonData[] = [
            {
              image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${results.name}.gif`,
              name: results.name,
            },
          ];

          dispatchUi(isLoadingFalseActionCreator());
          dispatchPokemon(loadPokemonActionsCreator(pokemonData));
          return;
        }

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
        dispatchUi(isLoadingFalseActionCreator());
      }
    },
    [details, dispatchPokemon, dispatchUi, newUrl]
  );

  const loadPokemonDetail = useCallback(
    async (name: string) => {
      const detailsUrl = `${details}${name}`;
      dispatchUi(isLoadingTrueActionCreator());
      try {
        const response = await fetch(detailsUrl);
        const detailedPokemon = (await response.json()) as PokemonDetail;

        const {
          abilities: [abilityOne, abilityTwo],
        } = detailedPokemon;

        const {
          types: [typeOne],
        } = detailedPokemon;

        const pokemonStats: PokemonStats = {
          abilities: {
            abilityOne: capitalize(abilityOne.ability.name),
            abilityTwo: abilityTwo
              ? capitalize(abilityTwo.ability.name)
              : "None",
          },
          height: detailedPokemon.height,
          id: detailedPokemon.id,
          types: capitalize(typeOne.type.name),
          name: capitalize(name),
          image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${detailedPokemon.name}.gif`,
        };

        dispatchUi(isLoadingFalseActionCreator());
        dispatchPokemon(loadPokemonDetailsActionsCreator(pokemonStats));
      } catch (error: unknown) {
        dispatchUi(isLoadingFalseActionCreator());
      }
    },
    [details, dispatchPokemon, dispatchUi]
  );

  return { loadAllPokemon, loadPokemonDetail };
};

export default useApi;
