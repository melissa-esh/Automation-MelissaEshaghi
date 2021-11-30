/// <reference types="cypress"/>

//Page elements
const createNewBill = 'h2 > .btn'
const menuButtonBill = ':nth-child(3) > .action'
const deleteBill = '.menu > :nth-child(2)'

//inputs

const pageContain = 'Bills'
const valueBill = 'input'
const paidBill = '.checkbox'
const saveBill  = '.blue'

function createBill(cy, billValue) {
    cy.contains(pageContain)
    cy.get(createNewBill).click()
    cy.get(valueBill).type(billValue)
    cy.get(paidBill).click()
    cy.get(saveBill).click()
}

// Bill
function billDelete(cy){
    cy.contains(pageContain)
    cy.get(menuButtonBill).click()
    cy.get(deleteBill).click()
}

module.exports = {
    createBill,
    billDelete
}

