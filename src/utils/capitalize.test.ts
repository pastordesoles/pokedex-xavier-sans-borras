import capitalize from "./capitalize";

describe("Given a capitalize function", () => {
  describe("When it receives the string pikachu", () => {
    test("Then it should return 'Pikachu' with the first letter capitalized", () => {
      const pokemonName = "pikachu";
      const expectedName = "Pikachu";

      const nameConverter = capitalize(pokemonName);

      expect(expectedName).toStrictEqual(nameConverter);
    });
  });
});
