import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoaderTrueWrapper from "../../mocks/wrappers/LoaderTrueWrapper";
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

  describe("When it's rendered and isLoading is true", () => {
    test("Then it should show a spinning loader", () => {
      render(<Details />, { wrapper: LoaderTrueWrapper });

      const loadingGif = screen.getByTestId("custom-loading");

      expect(loadingGif).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clicks on the favourite button", () => {
    test("Then it should be present in the document", () => {
      render(<Details />, { wrapper: TestWrapper });

      const favouriteButton = screen.getByTestId("favourite");

      userEvent.click(favouriteButton!);

      expect(favouriteButton).toBeInTheDocument();
    });
  });
});
