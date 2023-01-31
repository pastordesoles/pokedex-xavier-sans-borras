import { render, screen } from "@testing-library/react";
import MainWrapper from "../../mocks/wrappers/MainWrapper";
import PokemonList from "./PokemonList";

describe("Given a PokemonList component", () => {
  describe("When it's rendered with a list of Pokemon", () => {
    test("Then it shoudl show a level 2 heading with the text 'Generation 1'", () => {
      const expectedHeading = "Generation 1";

      render(<PokemonList />, { wrapper: MainWrapper });

      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedHeading,
      });

      expect(heading).toHaveTextContent(expectedHeading);
    });
  });
});
