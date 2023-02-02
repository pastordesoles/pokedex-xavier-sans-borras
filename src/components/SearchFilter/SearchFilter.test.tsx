import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchFilter from "./SearchFilter";

jest.setTimeout(20000);

describe("Given a SearchFilter component", () => {
  describe("When it renders", () => {
    test("Then it should show the input search", async () => {
      render(<SearchFilter />);

      const inputSearch = screen.queryByRole("searchbox")!;

      await userEvent.type(inputSearch, "pikachu", { delay: 2100 });

      expect(inputSearch).toBeInTheDocument();
    });
  });
});
