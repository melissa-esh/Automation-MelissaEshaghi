/// <reference types="cypress"/>

const createNewClient = 'h2 > .btn'
const deleteClient = '.menu > :nth-child(2)'


//Create new Client
function clientCreate (cy, clientFirstname, clientLastname, clientEmail, clientPhone) {
cy.contains(pageContain)
cy.get(createNewClient).click
cy.get(nameClient).type(clientFirstname + " " + clientLastname)
cy.get(emailClient).type(clientEmail)
cy.get(phonelClient).type(clientPhone)
cy.get(saveClient).click()

}


//Delete Client
function deleteClient(cy, clientPhone) {
    cy.contains(pageContain)
    cy.contains(clientPhone).click()
    cy.get(menuButtonClient).click()
    cy.contains(clientPhone).should('not.exist')

}

//Module Exports
module.exports = {
clientCreate,
deleteClient
}