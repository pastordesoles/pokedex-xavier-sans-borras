import { CurrentUiState } from "../../stores/contexts/uiContext/types";

export const mockCurrentUiStateFalse: CurrentUiState = {
  isLoading: false,
  isOpen: false,
  modalInformation: { isError: false, modalText: "Hello" },
};

export const mockCurrentUiStateTrue: CurrentUiState = {
  isLoading: true,
  isOpen: true,
  modalInformation: { isError: true, modalText: "Hello" },
};
