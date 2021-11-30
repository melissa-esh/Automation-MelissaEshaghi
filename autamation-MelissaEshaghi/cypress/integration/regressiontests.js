/// <reference types="cypress"/>


//import * as localhost from '../targets/localhost'

import * as indexFuncs from '../pages/indexPages'
import * as dashFuncs from '../pages/dashboard'
import * as billFuncs from '../pages/billsPage'
import * as clientFuncs from '../pages/clientPage'

import faker from 'faker'
let firstname = faker.name.firstName()
let lastname = faker.name.lastName()
let email = faker.internet.email()
let phone = faker.phone.phoneNumber()
let valueBill = faker.datatype.number()


describe('Test Suite', function(){ 
    beforeEach(() => { 
    cy.visit('http://localhost:3000')
    indexFuncs.checkloginPageTitle(cy)
    indexFuncs.performValidLogin(cy, 'tester02' , 'sppm7qncqmVft5uECkwjLcLdEJGzM3Cw' ,'Tester Hotel Overview')
    
    })
    
    afterEach(() => { 
        dashFuncs.performLogout(cy,'Login')
        
    })

    //Create a new Client
    it('Create Client', function(){
    dashFuncs.viewClients()
    clientFuncs.clientCreate(cy, firstname, lastname, email, phone)
    })

    //Delete Client
    it('Delete Client', function(){
    dashFuncs.viewClients()
    clientFuncs.clientDelete(cy)
    })

    //Create Bill
    it('Create Bill', function(){
    dashFuncs.viewBill()
    billFuncs.createBill(cy, valueBill)

    })

    //Delete Bill
    it('Delete Bill', function(){
    dashFuncs.viewBill()
    billFuncs.billDelete(cy, valueBill)

    })

})
