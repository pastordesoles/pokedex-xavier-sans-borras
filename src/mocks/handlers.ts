import { rest } from "msw";
import { mockPokemonResponseRaw } from "./mockResponses/mockPokemonResponse";

let apiUrl = "https://pokeapi.co/api/v2/pokemon?&limit=151";

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonResponseRaw));
  }),

  rest.get(`${apiUrl}`, (request, response, context) => {
    return response.once(context.status(404), context.json({}));
  }),
];

export default handlers;
