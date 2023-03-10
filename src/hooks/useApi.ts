import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  loadFavouritePokemonActionsCreator,
  loadPokemonDetailsActionsCreator,
  loadPokemonActionsCreator,
  deleteFavouritePokemonActionsCreator,
} from "../stores/actions/pokemonActions/pokemonActionCreators";
import {
  isLoadingFalseActionCreator,
  isLoadingTrueActionCreator,
  openModalActionCreator,
} from "../stores/actions/uiActions/uiActionCreators";
import PokemonContext from "../stores/contexts/pokemonContext/PokemonContext";
import UiContext from "../stores/contexts/uiContext/UiContext";
import capitalize from "../utils/capitalize";
import {
  FavouritePokemon,
  PokemonData,
  PokemonDetail,
  PokemonName,
  PokemonStats,
} from "./types";

const useApi = () => {
  const { dispatch: dispatchPokemon } = useContext(PokemonContext);
  const { dispatch: dispatchUi } = useContext(UiContext);
  const navigate = useNavigate();

  let newUrl = process.env.REACT_APP_API_URL!;
  let details = process.env.REACT_APP_API_URL_DETAILS!;
  let favourites = process.env.REACT_APP_API_URL_LOCAL!;

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
        navigate("/pokemon");
      }
    },
    [details, dispatchPokemon, dispatchUi, navigate]
  );

  const loadAllFavouritePokemon = useCallback(async () => {
    dispatchUi(isLoadingTrueActionCreator());
    try {
      const response = await fetch(`${favourites}list`);
      const { pokemon } = (await response.json()) as FavouritePokemon;
      dispatchUi(isLoadingFalseActionCreator());
      dispatchPokemon(loadFavouritePokemonActionsCreator(pokemon));
    } catch (error: unknown) {
      dispatchUi(isLoadingFalseActionCreator());
      dispatchUi(openModalActionCreator(true, "Better reload again..."));
    }
  }, [dispatchPokemon, dispatchUi, favourites]);

  const deleteOnePokemon = useCallback(
    async (pokemonId: string) => {
      dispatchUi(isLoadingTrueActionCreator());
      try {
        await fetch(`${favourites}delete/${pokemonId}`, {
          method: "DELETE",
        });
        dispatchUi(isLoadingFalseActionCreator());
        dispatchPokemon(deleteFavouritePokemonActionsCreator(pokemonId));
        dispatchUi(openModalActionCreator(false, "Pokemon deleted"));
      } catch (error: unknown) {
        dispatchUi(isLoadingFalseActionCreator());
        dispatchUi(
          openModalActionCreator(true, "The Pokemon is still here...")
        );
      }
    },
    [dispatchPokemon, dispatchUi, favourites]
  );

  const addOnePokemon = useCallback(
    async (pokemon: PokemonStats) => {
      dispatchUi(isLoadingTrueActionCreator());
      try {
        await fetch(`${favourites}add`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(pokemon),
        });

        dispatchUi(isLoadingFalseActionCreator());
      } catch (error: unknown) {
        dispatchUi(isLoadingFalseActionCreator());
      }
    },
    [dispatchUi, favourites]
  );

  return {
    loadAllPokemon,
    loadPokemonDetail,
    loadAllFavouritePokemon,
    addOnePokemon,
    deleteOnePokemon,
  };
};

export default useApi;
