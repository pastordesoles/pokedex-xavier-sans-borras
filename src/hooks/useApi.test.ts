import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { mockUiContextFalse } from "../mocks/mockContexts/mockUiContext";
import TestWrapper from "../mocks/wrappers/TestWrapper";
import {
  isLoadingFalseActionCreator,
  isLoadingTrueActionCreator,
} from "../stores/actions/uiActions/uiActionCreators";

const { dispatch: dispatchUi } = mockUiContextFalse;

describe("Given the useApi hook", () => {
  describe("When its method loadAllPokemon is invoked and an error is thrown", () => {
    test("Then dispatch should be called one time to show a loading", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const {
        result: {
          current: { loadAllPokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await loadAllPokemon();

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });

  describe("When its method loadAllPokemon is invoked", () => {
    test("Then dispatchUi should be called two times to show and hide loading and to load the received Pokemon", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const {
        result: {
          current: { loadAllPokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await loadAllPokemon();

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });

  describe("When its method loadPokemonDetail is invoked and an error is thrown", () => {
    test("Then dispatch should be called one time to show a loading", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const searchName = "charmander";
      const {
        result: {
          current: { loadPokemonDetail },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await loadPokemonDetail(searchName);

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });

  describe("When its method loadAllPokemon is invoked with the name 'charmander'", () => {
    test("Then dispatchUi should be called two times to show and hide loading and to load the received Pokemon", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const searchName = "charmander";
      const {
        result: {
          current: { loadAllPokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await loadAllPokemon(searchName);

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });

  describe("When its method loadPokemonDetail is invoked with the name 'pikachu'", () => {
    test("Then dispatchUi should be called two times to show and hide loading and to load the received Pokemon", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const searchName = "pikachu";
      const {
        result: {
          current: { loadPokemonDetail },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await loadPokemonDetail(searchName);

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });

  describe("When its method loadPokemonDetail is invoked with the name 'mew' with only one ability", () => {
    test("Then dispatchUi should be called two times to show and hide loading and to load the received Pokemon", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const searchName = "mew";
      const {
        result: {
          current: { loadPokemonDetail },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await loadPokemonDetail(searchName);

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });
});
