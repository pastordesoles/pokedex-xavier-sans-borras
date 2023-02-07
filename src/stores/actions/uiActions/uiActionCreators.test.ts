import {
  closeModalActionCreator,
  isLoadingFalseActionCreator,
  isLoadingTrueActionCreator,
  openModalActionCreator,
} from "./uiActionCreators";
import UiActionTypes from "./uiActionTypes";

describe("Given the function isLoadingTrueActionCreator", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with type 'isLoadingTrue'", () => {
      const expectedProperty = "type";
      const expectedValue = UiActionTypes.isLoadingTrue;

      const setIsLoadingAction = isLoadingTrueActionCreator();

      expect(setIsLoadingAction).toHaveProperty(
        expectedProperty,
        expectedValue
      );
    });
  });
});

describe("Given the function isLoadingFalseActionCreator", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with type 'isLoadingFalse'", () => {
      const expectedProperty = "type";
      const expectedValue = UiActionTypes.isLoadingFalse;

      const setIsLoadingAction = isLoadingFalseActionCreator();

      expect(setIsLoadingAction).toHaveProperty(
        expectedProperty,
        expectedValue
      );
    });
  });
});

describe("Given the function openModalActionCreator", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with type 'openModal'", () => {
      const expectedProperty = "type";
      const expectedValue = UiActionTypes.openModal;

      const setIsLoadingAction = openModalActionCreator(true, "Hello");

      expect(setIsLoadingAction).toHaveProperty(
        expectedProperty,
        expectedValue
      );
    });
  });
});

describe("Given the function closeModalActionCreator", () => {
  describe("When it's invoked", () => {
    test("Then it should return an action with type 'closeModal'", () => {
      const expectedProperty = "type";
      const expectedValue = UiActionTypes.closeModal;

      const setIsLoadingAction = closeModalActionCreator();

      expect(setIsLoadingAction).toHaveProperty(
        expectedProperty,
        expectedValue
      );
    });
  });
});
