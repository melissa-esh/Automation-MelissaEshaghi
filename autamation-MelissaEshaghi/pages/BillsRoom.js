/// <reference types="cypress" />

const createNewBill = 'h2 > .btn'
const deleteBill = '.menu > :nth-child(2)'


//Create new Bill
function createBill (cy, valueBill) {
cy.contains(pageContain)
cy.get(createNewBill).click
cy.get(billValue).type(valueBill)
cy.get(saveBill).click()
}


//Delete Bill
function deleteBill(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonBill).click()
    cy.get(billDelete).click()

}

//Module Exports
module.exports = {
createBill,
deleteBill
}