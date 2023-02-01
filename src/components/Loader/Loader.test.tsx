import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it renders", () => {
    test("Then it should show a spinning loader", () => {
      render(<Loader />);

      const loadingGif = screen.getByTestId("custom-loading");

      expect(loadingGif).toBeInTheDocument();
    });
  });
});
