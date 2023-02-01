import UiContextStructure from "../../stores/contexts/uiContext/types";
import mockCurrentUiState from "./mockCurrentUiState";

const mockUiContext: UiContextStructure = {
  currentUiState: mockCurrentUiState,
  dispatch: jest.fn(),
};

export default mockUiContext;
