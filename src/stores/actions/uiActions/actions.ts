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
