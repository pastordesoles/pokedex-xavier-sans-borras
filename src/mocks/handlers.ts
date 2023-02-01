import { rest } from "msw";
import mockPokemonResponse from "./mockResponses/mockPokemonResponse";

let apiUrl = "https://pokeapi.co/api/v2/pokemon?&limit=151";

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(404), context.json({}));
  }),

  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonResponse));
  }),
];

export default handlers;
