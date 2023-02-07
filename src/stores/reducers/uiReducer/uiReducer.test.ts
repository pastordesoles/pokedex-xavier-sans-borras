import { mockCurrentUiStateFalse } from "../../../mocks/mockContexts/mockCurrentUiState";
import {
  CloseModalAction,
  OpenModalAction,
  UiAction,
} from "../../actions/uiActions/actions";
import UiActionTypes from "../../actions/uiActions/uiActionTypes";
import { CurrentUiState } from "../../contexts/uiContext/types";
import uiReducer from "./uiReducer";

describe("Given the function uiReducer", () => {
  describe("When it receives a currentUiState and an action 'isLoadingTrue'", () => {
    test("Then it should return a newUiState with the property 'isLoading' true", () => {
      const newUiState: CurrentUiState = {
        isLoading: true,
        isOpen: false,
        modalInformation: { isError: false, modalText: "Hello" },
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
        isOpen: false,
        modalInformation: { isError: false, modalText: "Hello" },
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

  describe("When it receives a currentUiState and an action 'openModal'", () => {
    test("Then it should return a newUiState with the property 'isOpen' true", () => {
      const newUiState: CurrentUiState = {
        isLoading: false,
        isOpen: true,
        modalInformation: { isError: false, modalText: "Hello" },
      };

      const action: OpenModalAction = {
        type: UiActionTypes.openModal,
        payload: { isError: false, modalText: "Hello" },
      };

      const currentUiState = mockCurrentUiStateFalse;

      const expectedUiState = uiReducer(
        currentUiState as CurrentUiState,
        action
      );

      expect(expectedUiState).toStrictEqual(newUiState);
    });
  });

  describe("When it receives a currentUiState and an action 'closeModal'", () => {
    test("Then it should return a newUiState with the property 'isOpen' false", () => {
      const newUiState: CurrentUiState = {
        isLoading: false,
        isOpen: false,
        modalInformation: { isError: false, modalText: "Hello" },
      };

      const action: CloseModalAction = {
        type: UiActionTypes.closeModal,
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
