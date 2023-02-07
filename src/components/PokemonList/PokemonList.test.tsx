import { render, screen } from "@testing-library/react";
import LoaderTrueWrapper from "../../mocks/wrappers/LoaderTrueWrapper";
import MainWrapper from "../../mocks/wrappers/MainWrapper";
import PokemonList from "./PokemonList";

describe("Given a PokemonList component", () => {
  describe("When it's rendered with a list of Pokemon", () => {
    test("Then it should show a level 2 heading with the text 'Generation 1'", () => {
      const expectedHeading = "Generation 1";

      render(<PokemonList isFavourite={false} />, { wrapper: MainWrapper });

      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedHeading,
      });

      expect(heading).toHaveTextContent(expectedHeading);
    });
  });

  describe("When it's rendered and isLoading is true", () => {
    test("Then it should show a spinning loader", () => {
      render(<PokemonList isFavourite={false} />, {
        wrapper: LoaderTrueWrapper,
      });

      const loadingGif = screen.getByTestId("custom-loading");

      expect(loadingGif).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a list of Pokemon and isFavourite true", () => {
    test("Then it should show a level 2 heading with the text 'Generation 1'", () => {
      const expectedHeading = "Generation 1";

      render(<PokemonList isFavourite={true} />, { wrapper: MainWrapper });

      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedHeading,
      });

      expect(heading).toHaveTextContent(expectedHeading);
    });
  });
});
