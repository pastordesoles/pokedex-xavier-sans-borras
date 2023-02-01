import {
  isLoadingFalseActionCreator,
  isLoadingTrueActionCreator,
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
