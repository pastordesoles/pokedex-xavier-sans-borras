describe("Given the Pokedex page", () => {
  describe("When the user enters", () => {
    it("Then it should be able to click on a Pokemon and see its detail", () => {
      cy.visit("/pokemon");
      cy.findByText("Charmander").click();
      cy.url().should("include", "/charmander");
    });
  });
});
