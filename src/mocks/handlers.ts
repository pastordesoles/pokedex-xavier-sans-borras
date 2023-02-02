import { rest } from "msw";
import {
  mockPokemonDetail,
  mockPokemonDetailRaw,
  mockPokemonDetailUndefinedRaw,
  mockPokemonResponseRaw,
} from "./mockResponses/mockPokemonResponse";

let apiUrl = process.env.REACT_APP_API_URL!;
let pokemonName = process.env.REACT_APP_API_URL_DETAILS_ONE!;
let pokemonNameTwo = process.env.REACT_APP_API_URL_DETAILS_TWO!;
let pokemonNameThree = process.env.REACT_APP_API_URL_DETAILS_THREE!;

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response.once(context.status(404));
  }),

  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonResponseRaw));
  }),

  rest.get(`${pokemonName}`, (request, response, context) => {
    return response.once(context.status(404));
  }),

  rest.get(`${pokemonName}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonDetail));
  }),

  rest.get(`${pokemonNameTwo}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonDetailRaw));
  }),

  rest.get(`${pokemonNameThree}`, (request, response, context) => {
    return response(
      context.status(200),
      context.json(mockPokemonDetailUndefinedRaw)
    );
  }),
];

export default handlers;
