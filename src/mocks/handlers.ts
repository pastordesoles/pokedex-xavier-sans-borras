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
let apiUrlLocal = process.env.REACT_APP_API_URL_LOCAL!;

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

  rest.get(`${apiUrlLocal}list`, (request, response, context) => {
    return response.once(context.status(404));
  }),

  rest.get(`${apiUrlLocal}list`, (request, response, context) => {
    return response(
      context.status(200),
      context.json({ pokemon: [mockPokemonDetail] })
    );
  }),

  rest.delete(`${apiUrlLocal}delete/1`, (request, response, context) => {
    return response.networkError("Error");
  }),

  rest.delete(`${apiUrlLocal}delete/2`, (request, response, context) => {
    return response(context.status(200));
  }),

  rest.post(`${apiUrlLocal}add`, (request, response, context) => {
    return response.once(context.status(201));
  }),

  rest.post(`${apiUrlLocal}add`, (request, response, context) => {
    return response.networkError("Error");
  }),
];

export default handlers;
