const user = require("../fixtures/user.json");
const store = require("../fixtures/store.json");

beforeEach(() => {
  cy.visit("/admin/");
});

it("Should be able to login with correct email and password", () => {
  cy.login(user.validUserEmail, user.validPassword);
  cy.contains(store.deskForEqual).should("be.visible");
})

it("Should be able to login with incorrect email and password", () => {
  cy.login(user.iNvalidUserEmail, user.validPassword);
  cy.contains(store.mistakeForEqual).should("be.visible");
})