import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestWrapper from "../../mocks/wrappers/TestWrapper";
import Modal from "./Modal";

jest.useFakeTimers();

describe("Given a Modal component", () => {
  describe("When its rendered", () => {
    test("Then it should show a modal", () => {
      render(<Modal />, { wrapper: TestWrapper });

      const modal = screen.queryByText("Hello");

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When its rendered, and the user clicsk on close", () => {
    test("Then it should not show a modal", () => {
      render(<Modal />, { wrapper: TestWrapper });

      const deleteButton = screen.getByTestId("delete");

      userEvent.click(deleteButton!);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
