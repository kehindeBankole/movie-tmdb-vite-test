/// <reference types="cypress" />

describe("/homepage", () => {
  beforeEach(() => {
    cy.visit("/about/movie/414906");
  });
  it("navbar renders correctly", () => {
    cy.get("#container").should("exist");
  });

  it("about page renders correctly", () => {
    cy.get("#about-container").should("exist");
  });
});
