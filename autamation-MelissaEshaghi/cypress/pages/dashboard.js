/// <reference types="cypress"/>


// Elements
const logoutBtn = '.user > .btn'
const clientView = '.blocks >:nth-child(2) > .btn'
const billsView = ':nth-child(3) > .btn'
const titleDashboard = 'Tester Hotel'

function checklTitle(){
     cy.title().should('eq', titleDashboard)
}
function performLogout(cy, confirmationContent){
    cy.get(logoutBtn).click()
    cy.contains(confirmationContent)
}
function viewClients(){
    cy.get(clientView).click();

}
function viewBill(){
    cy.get(billsView).click();

}
module.exports = {
    performLogout,
    checklTitle,
    viewClients,
    viewBill
}