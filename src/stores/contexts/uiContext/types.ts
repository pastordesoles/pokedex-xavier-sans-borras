import { Dispatch } from "react";
import { UiAction } from "../../actions/uiActions/actions";

interface UiContextStructure {
  currentUiState: CurrentUiState;
  dispatch: Dispatch<UiAction>;
}

export interface CurrentUiState {
  isLoading: boolean;
}
export default UiContextStructure;
