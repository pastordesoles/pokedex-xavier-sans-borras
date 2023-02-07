import { PokemonContextStructure } from "../../stores/contexts/pokemonContext/types";
import {
  mockPokemonResponse,
  mockPokemonDetail,
} from "../mockResponses/mockPokemonResponse";

const mockPokemonContext: PokemonContextStructure = {
  currentPokemonState: {
    currentPokemon: mockPokemonResponse,
    currentDetailedPokemon: mockPokemonDetail,
    currentFavouritePokemon: [mockPokemonDetail],
  },
  dispatch: jest.fn(),
};

export default mockPokemonContext;
