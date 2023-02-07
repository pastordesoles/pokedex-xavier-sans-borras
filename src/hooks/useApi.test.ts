import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { mockUiContextFalse } from "../mocks/mockContexts/mockUiContext";
import TestWrapper from "../mocks/wrappers/TestWrapper";
import {
  isLoadingFalseActionCreator,
  isLoadingTrueActionCreator,
  openModalActionCreator,
} from "../stores/actions/uiActions/uiActionCreators";
import mockPokemonContext from "../mocks/mockContexts/mockPokemonContext";
import { mockPokemonDetail } from "../mocks/mockResponses/mockPokemonResponse";
import { loadFavouritePokemonActionsCreator } from "../stores/actions/pokemonActions/pokemonActionCreators";

const { dispatch: dispatchUi } = mockUiContextFalse;
const { dispatch: dispatchPokemon } = mockPokemonContext;

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

  describe("When its method loadAllFavouritePokemon is invoked", () => {
    test("Then dispatchUi should be called two times to show and hide loading and to load the received Pokemon", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const thirdUiDispatchAction = openModalActionCreator(
        true,
        "Better reload again..."
      );
      const {
        result: {
          current: { loadAllFavouritePokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await loadAllFavouritePokemon();

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(3, thirdUiDispatchAction);
    });
  });

  describe("When its method loadAllFavouritePokemon is invoked and an error is thrown", () => {
    test("Then dispatch should be called one time to show a loading", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const thirdDispatchAction = loadFavouritePokemonActionsCreator([
        mockPokemonDetail,
      ]);
      const {
        result: {
          current: { loadAllFavouritePokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await loadAllFavouritePokemon();

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
      expect(dispatchPokemon).toHaveBeenNthCalledWith(1, thirdDispatchAction);
    });
  });

  describe("When its method deleteOnePokemon is invoked and the server responds with network error", () => {
    test("Then dispatch ui should be called with an open modal action", async () => {
      const {
        result: {
          current: { deleteOnePokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });
      const idToDelete = 1;

      await deleteOnePokemon(`${idToDelete}`);

      expect(dispatchUi).toHaveBeenCalled();
    });
  });

  describe("When its method deleteOnePokemon is invoked with the id 1", () => {
    test("Then dispatch UI should be called with isLoadingFalse action", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();

      const {
        result: {
          current: { deleteOnePokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });
      const idToDelete = "2";

      await deleteOnePokemon(idToDelete);

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });

  describe("When its method addOnePokemon is invoked", () => {
    test("Then dispatch UI should be called with isLoadingFalse action", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();
      const {
        result: {
          current: { addOnePokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await addOnePokemon(mockPokemonDetail);

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });

  describe("When its method addOnePokemon is invoked and the server responds with network error", () => {
    test("Then dispatch UI should be called with isLoadingFalse action", async () => {
      const firstUiDispatchAction = isLoadingTrueActionCreator();
      const secondUiDispatchAction = isLoadingFalseActionCreator();

      const {
        result: {
          current: { addOnePokemon },
        },
      } = renderHook(() => useApi(), {
        wrapper: TestWrapper,
      });

      await addOnePokemon(mockPokemonDetail);

      expect(dispatchUi).toHaveBeenNthCalledWith(1, firstUiDispatchAction);
      expect(dispatchUi).toHaveBeenNthCalledWith(2, secondUiDispatchAction);
    });
  });
});
