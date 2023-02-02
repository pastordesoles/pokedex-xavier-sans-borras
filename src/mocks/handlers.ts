import { rest } from "msw";
import {
  mockPokemonDetail,
  mockPokemonDetailRaw,
  mockPokemonDetailUndefinedRaw,
  mockPokemonResponseRaw,
} from "./mockResponses/mockPokemonResponse";

let apiUrl = process.env.REACT_APP_API_URL!;
let details = process.env.REACT_APP_API_URL_DETAILS!;
let pokemonName = "charmander";
let pokemonNameTwo = "pikachu";
let pokemonNameThree = "mew";

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response.once(context.status(404));
  }),

  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonResponseRaw));
  }),

  rest.get(`${details}${pokemonName}`, (request, response, context) => {
    return response.once(context.status(404));
  }),

  rest.get(`${details}${pokemonName}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonDetail));
  }),

  rest.get(`${details}${pokemonNameTwo}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonDetailRaw));
  }),

  rest.get(`${details}${pokemonNameThree}`, (request, response, context) => {
    return response(
      context.status(200),
      context.json(mockPokemonDetailUndefinedRaw)
    );
  }),
];

export default handlers;
