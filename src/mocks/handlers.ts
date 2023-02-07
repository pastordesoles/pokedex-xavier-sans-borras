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
let apiUrlLocalDeleteOne = process.env.REACT_APP_API_URL_LOCAL_DELETE_ONE!;
let apiUrlLocalDeleteTwo = process.env.REACT_APP_API_URL_LOCAL_DELETE_TWO!;
let apiUrlLocalAdd = process.env.REACT_APP_API_URL_LOCAL_ADD_ONE!;
let apiUrlLocalAddTwo = process.env.REACT_APP_API_URL_LOCAL_ADD_TWO!;

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

  rest.delete(`${apiUrlLocalDeleteOne}`, (request, response, context) => {
    return response.networkError("Error");
  }),

  rest.delete(`${apiUrlLocalDeleteTwo}`, (request, response, context) => {
    return response(context.status(200));
  }),

  rest.post(`${apiUrlLocalAdd}`, (request, response, context) => {
    return response.once(context.status(201));
  }),

  rest.post(`${apiUrlLocalAddTwo}`, (request, response, context) => {
    return response.networkError("Error");
  }),
];

export default handlers;
