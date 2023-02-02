import { rest } from "msw";
import { mockPokemonResponseRaw } from "./mockResponses/mockPokemonResponse";

let apiUrl = process.env.REACT_APP_API_URL!;

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(mockPokemonResponseRaw));
  }),

  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(404));
  }),
];

export default handlers;
