/// <reference types="cypress" />


import * as localhost from '../tagets/localhost'

import * as indexFuncs from '../pages/IndexPages'
import * as dashFuncs from '../pages/dashboard'
import * as billFuncs from '../pages/BillsRoom'
import * as clientFuncs from '../pages/ClientRoom'

describe('Test Suite', function(){ 
    beforeEach(() => { 
    cy.visit(localhost.base_url)
    indexFuncs.checkTitle(cy)
    indexFuncs.validLogin(cy, localhost.username, localhost.password, 'Tester Hotel Overview')
    
    })
    afterEach(() => { 
        dashFuncs.perfLogout(cy, 'Login')
        
        })

})

//Create Client
it('Create Client', function(){
    dashFuncs.wiewClients()
    clientFuncs.clientCreate(cy, firstName, lastName, email, phone)

})

//Delete Client
it('Delete Client', function(){
    dashFuncs.wiewClients()
    clientFuncs.deleteClient(cy, clientPhone)

})



//Create Bill
it('Create Bill', function(){
    dashFuncs.wiewBill()
    billFuncs.createBill(cy, valueBill)

})



//Delete Bill
it('Delete Bill', function(){
    dashFuncs.wiewBill()
    billFuncs.deleteBill(cy, valueBill)

})





