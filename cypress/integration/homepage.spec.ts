/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("/homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders correctly", () => {
    cy.get("#container").should("exist");
  });

  it("navbar", () => {
    cy.get("#navbar")
      .should("exist")
      .contains("h1", "TMDB")
      .should("be.visible");
  });

  it("should go to about page", () => {
    
    cy.get("#movie-button").click({ multiple: true });
    cy.location("pathname").should("include", "about");
  });
  it("shows genre buttons" , ()=>{
     cy.get('.genre-btn').should('exist')
  })
  it("check data", () => {
    cy.intercept("GET", "**/trending/movie/week/*", "fixture:movie.json");
    cy.get("#movie-button")
      .get("h4")
      .then((item) => {
        expect(item).to.contain("The Batman");
      });

  });

  it("checks search box exist" , ()=>{
     cy.get('input[type=text]').should('exist')
  })
});
