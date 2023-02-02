import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered with path '/*'", () => {
    test("Then it should render 'not found page'", () => {
      const expectedApp = TestRenderer.create(
        <MemoryRouter initialEntries={["/*"]}>
          <App />
        </MemoryRouter>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });
});
