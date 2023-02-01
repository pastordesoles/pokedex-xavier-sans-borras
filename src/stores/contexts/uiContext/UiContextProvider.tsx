import { useReducer } from "react";
import uiReducer from "../../reducers/uiReducer/uiReducer";
import { CurrentUiState } from "./types";
import UiContext from "./UiContext";

interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const [currentUiState, dispatch] = useReducer(uiReducer, {
    isLoading: false,
  } as CurrentUiState);
  return (
    <UiContext.Provider value={{ currentUiState, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
