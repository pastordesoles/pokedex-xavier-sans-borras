import { rest } from "msw";
import mockPokemonResponse from "./mockResponses/mockPokemonResponse";

let apiUrl = process.env.REACT_APP_API_URL!;

const handlers = [
  rest.get(`${apiUrl}`, (_request, response, context) => {
    return response(context.status(200), context.json(mockPokemonResponse));
  }),
  rest.post(`${apiUrl}`, (_request, response, context) => {
    return response(context.status(404), context.json({}));
  }),
];

export default handlers;
