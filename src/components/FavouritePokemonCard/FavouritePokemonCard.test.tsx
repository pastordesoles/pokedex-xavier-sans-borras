import { render, screen } from "@testing-library/react";
import TestWrapper from "../../mocks/wrappers/TestWrapper";
import { mockPokemonDetail } from "../../mocks/mockResponses/mockPokemonResponse";
import FavouritePokemonCard from "./FavouritePokemonCard";
import userEvent from "@testing-library/user-event";

describe("Given a FavouritePokemonCard component", () => {
  describe("When it's rendered with the Pokemon 'charmander'", () => {
    test("Then it should show a level 3 heading with the Pokemon name 'Charmander", () => {
      render(<FavouritePokemonCard pokemon={mockPokemonDetail} />, {
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

  describe("When it's rendered and the user clicks on the delete button", () => {
    test("Then it should be present in the document", () => {
      render(<FavouritePokemonCard pokemon={mockPokemonDetail} />, {
        wrapper: TestWrapper,
      });

      const deleteButton = screen.getByTestId("delete");

      userEvent.click(deleteButton!);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
