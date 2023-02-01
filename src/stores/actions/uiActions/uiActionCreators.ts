import { IsLoadingFalse, IsLoadingTrue } from "./actions";
import UiActionTypes from "./uiActionTypes";

export const isLoadingTrueActionCreator = (): IsLoadingTrue => ({
  type: UiActionTypes.isLoadingTrue,
});

export const isLoadingFalseActionCreator = (): IsLoadingFalse => ({
  type: UiActionTypes.isLoadingFalse,
});
