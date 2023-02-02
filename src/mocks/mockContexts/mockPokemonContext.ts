import { PokemonContextStructure } from "../../stores/contexts/pokemonContext/types";
import {
  mockPokemonResponse,
  mockPokemonDetail,
} from "../mockResponses/mockPokemonResponse";

const mockPokemonContext: PokemonContextStructure = {
  currentPokemonState: {
    currentPokemon: mockPokemonResponse,
    currentDetailedPokemon: mockPokemonDetail,
  },
  dispatch: jest.fn(),
};

export default mockPokemonContext;
