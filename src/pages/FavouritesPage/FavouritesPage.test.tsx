import { render, screen } from "@testing-library/react";
import TestWrapper from "../../mocks/wrappers/TestWrapper";
import FavouritesPage from "./FavouritesPage";

describe("Given a FavouritesPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of Pokemon", () => {
      render(<FavouritesPage />, { wrapper: TestWrapper });

      const pokemonList = screen.getAllByRole("listitem");

      expect(pokemonList).toHaveLength(3);
    });
  });
});
