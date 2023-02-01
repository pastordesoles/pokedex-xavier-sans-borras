import { UiAction } from "../../actions/uiActions/actions";
import UiActionTypes from "../../actions/uiActions/uiActionTypes";
import { CurrentUiState } from "../../contexts/uiContext/types";

const uiReducer = (
  currentUiState: CurrentUiState,
  action: UiAction
): CurrentUiState => {
  let newUiState: CurrentUiState;
  newUiState =
    action.type === UiActionTypes.isLoadingTrue
      ? {
          ...currentUiState,
          isLoading: true,
        }
      : { ...currentUiState, isLoading: false };
  return newUiState;
};

export default uiReducer;
