import UiContextStructure from "../../stores/contexts/uiContext/types";
import {
  mockCurrentUiStateFalse,
  mockCurrentUiStateTrue,
} from "./mockCurrentUiState";

export const mockUiContextFalse: UiContextStructure = {
  currentUiState: mockCurrentUiStateFalse,
  dispatch: jest.fn(),
};

export const mockUiContextTrue: UiContextStructure = {
  currentUiState: mockCurrentUiStateTrue,
  dispatch: jest.fn(),
};
