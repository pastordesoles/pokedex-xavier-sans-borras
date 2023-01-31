import { render, screen } from "@testing-library/react";
import TestWrapper from "../../mocks/wrappers/TestWrapper";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of Pokemon", () => {
      render(<HomePage />, { wrapper: TestWrapper });

      const pokemonList = screen.getAllByRole("listitem");

      expect(pokemonList).toHaveLength(2);
    });
  });
});
