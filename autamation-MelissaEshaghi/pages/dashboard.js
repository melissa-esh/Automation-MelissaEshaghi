/// <reference types="cypress"/>

const logoutBtn = '.user > .btn'

function performLogout(cy, confirmationContent) {
    cy.get(logoutBtn).click
    cy.contains(confirmationContent)
}

function viewBills(){
    cy.get(clientView).click();
}

function viewReservations(){
    cy.get(reservationView).click();
}

module.export = {
    performLogout
}