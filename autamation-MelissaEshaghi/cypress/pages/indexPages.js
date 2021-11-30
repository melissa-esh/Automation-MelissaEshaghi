/// <reference types="cypress"/>

//
const loginPageTitle = 'Testers Hotel'
const usernameField = ':nth-child(1) > input'
const passwordField = ':nth-child(2) > input'
const submitBtn = '.btn'
const formLabel = 'Login'

function checkloginPageTitle(cy) {
    cy.title().should('eq', loginPageTitle)
}

function performValidLogin(cy, username, password, confirmationContent) {
    cy.contains(formLabel)
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(submitBtn).click()
    cy.contains(confirmationContent)
}

module.exports = {
    checkloginPageTitle,
    performValidLogin
}