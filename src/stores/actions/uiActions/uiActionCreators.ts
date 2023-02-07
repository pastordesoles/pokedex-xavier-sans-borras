import {
  IsLoadingFalse,
  IsLoadingTrue,
  OpenModalAction,
  CloseModalAction,
} from "./actions";
import UiActionTypes from "./uiActionTypes";

export const isLoadingTrueActionCreator = (): IsLoadingTrue => ({
  type: UiActionTypes.isLoadingTrue,
});

export const isLoadingFalseActionCreator = (): IsLoadingFalse => ({
  type: UiActionTypes.isLoadingFalse,
});

export const openModalActionCreator = (
  isError: boolean,
  modalText: string
): OpenModalAction => ({
  type: UiActionTypes.openModal,
  payload: { isError, modalText },
});

export const closeModalActionCreator = (): CloseModalAction => ({
  type: UiActionTypes.closeModal,
});
