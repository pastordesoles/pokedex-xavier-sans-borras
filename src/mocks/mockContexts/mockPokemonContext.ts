import { PokemonContextStructure } from "../../stores/contexts/pokemonContext/types";
import mockPokemonResponse from "../mockResponses/mockPokemonResponse";

const mockPokemonContext: PokemonContextStructure = {
  currentPokemonState: { currentPokemon: mockPokemonResponse },
  dispatch: jest.fn(),
};

export default mockPokemonContext;
