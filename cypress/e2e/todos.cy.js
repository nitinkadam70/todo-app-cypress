describe("testing todo app", () => {
  it("should visit correctlly", () => {
    cy.visit("http://localhost:3000/");

    cy.focused()
      .get(".task-input")
  });

})

