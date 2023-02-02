import { render, screen } from "@testing-library/react";
import TestWrapper from "../../mocks/wrappers/TestWrapper";
import Details from "./Details";

describe("Given a Details component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a Pokemon", () => {
      render(<Details />, { wrapper: TestWrapper });

      const pokemonList = screen.getAllByRole("listitem");

      expect(pokemonList).toHaveLength(2);
    });
  });
});
