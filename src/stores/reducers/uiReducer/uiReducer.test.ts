import { mockCurrentUiStateFalse } from "../../../mocks/mockContexts/mockCurrentUiState";
import { UiAction } from "../../actions/uiActions/actions";
import UiActionTypes from "../../actions/uiActions/uiActionTypes";
import { CurrentUiState } from "../../contexts/uiContext/types";
import uiReducer from "./uiReducer";

describe("Given the function uiReducer", () => {
  describe("When it receives a currentUiState and an action 'isLoadingTrue'", () => {
    test("Then it should return a newUiState with the property 'isLoading' true", () => {
      const newUiState: CurrentUiState = {
        isLoading: true,
      };

      const action: UiAction = {
        type: UiActionTypes.isLoadingTrue,
      };

      const currentUiState = mockCurrentUiStateFalse;

      const expectedUiState = uiReducer(
        currentUiState as CurrentUiState,
        action
      );

      expect(expectedUiState).toStrictEqual(newUiState);
    });
  });

  describe("When it receives a currentUiState and an action 'isLoadingFalse'", () => {
    test("Then it should return a newUiState with the property 'isLoading' false", () => {
      const newUiState: CurrentUiState = {
        isLoading: false,
      };

      const action: UiAction = {
        type: UiActionTypes.isLoadingFalse,
      };

      const currentUiState = mockCurrentUiStateFalse;

      const expectedUiState = uiReducer(
        currentUiState as CurrentUiState,
        action
      );

      expect(expectedUiState).toStrictEqual(newUiState);
    });
  });
});
