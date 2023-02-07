import { OpenModalAction, UiAction } from "../../actions/uiActions/actions";
import UiActionTypes from "../../actions/uiActions/uiActionTypes";
import { CurrentUiState } from "../../contexts/uiContext/types";

const uiReducer = (
  currentUiState: CurrentUiState,
  action: UiAction
): CurrentUiState => {
  let newUiState: CurrentUiState;

  switch (action.type) {
    case UiActionTypes.isLoadingTrue:
      newUiState = { ...currentUiState, isLoading: true };
      break;
    case UiActionTypes.isLoadingFalse:
      newUiState = { ...currentUiState, isLoading: false };
      break;
    case UiActionTypes.openModal:
      newUiState = {
        ...currentUiState,
        isOpen: true,
        modalInformation: (action as OpenModalAction).payload,
      };
      break;
    case UiActionTypes.closeModal:
      newUiState = {
        ...currentUiState,
        isOpen: false,
      };
      break;
    default: {
      newUiState = { ...currentUiState };
    }
  }
  return newUiState;
};

export default uiReducer;
