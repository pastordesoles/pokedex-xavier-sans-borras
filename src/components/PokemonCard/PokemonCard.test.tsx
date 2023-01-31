import { render, screen } from "@testing-library/react";
import TestWrapper from "../../mocks/wrappers/TestWrapper";
import PokemonCard from "./PokemonCard";
import mockPokemonResponse from "../../mocks/mockResponses/mockPokemonResponse";

describe("Given a PokemonCard component", () => {
  describe("When it's rendered with the Pokemon 'charmander'", () => {
    test("Then it should show a level 3 heading with the Pokemon name 'Charmander", () => {
      render(<PokemonCard pokemon={mockPokemonResponse[0]} />, {
        wrapper: TestWrapper,
      });
      const pokemonAccessibleName = "Charmander";

      const pokemonName = screen.getByRole("heading", {
        name: pokemonAccessibleName,
        level: 3,
      });

      expect(pokemonName).toHaveTextContent(pokemonAccessibleName);
    });
  });
});
