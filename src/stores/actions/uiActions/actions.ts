import UiActionTypes from "./uiActionTypes";

export interface UiAction {
  type: UiActionTypes;
}

export interface IsLoadingTrue extends UiAction {
  type: UiActionTypes.isLoadingTrue;
}

export interface IsLoadingFalse extends UiAction {
  type: UiActionTypes.isLoadingFalse;
}

export interface OpenModalAction extends UiAction {
  type: UiActionTypes.openModal;
  payload: {
    isError: boolean;
    modalText: string;
  };
}

export interface CloseModalAction extends UiAction {
  type: UiActionTypes.closeModal;
}
