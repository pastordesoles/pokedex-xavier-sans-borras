import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainWrapper from "../../mocks/wrappers/MainWrapper";
import SearchFilter from "./SearchFilter";

jest.setTimeout(20000);

describe("Given a SearchFilter component", () => {
  describe("When it renders", () => {
    test("Then it should show the input search", async () => {
      render(<SearchFilter />, { wrapper: MainWrapper });

      const inputSearch = screen.queryByRole("searchbox")!;

      await userEvent.type(inputSearch, "p", { delay: 2100 });

      expect(inputSearch).toBeInTheDocument();
    });
  });
});
