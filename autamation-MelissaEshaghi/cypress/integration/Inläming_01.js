/// <reference types="cypress"/>

describe("Testfall", () => {
    it ("Login user", ()=> {
        cy.visit("https://localhost:3000")
        cy.get("h2").should("have.text", "Login")
        cy.get(":nth-child(1) > input").type("tester02")
        cy.get (":nth-child(2) > input").type("sppm7qncqmVft5uECkwjLcLdEJGzM3Cw")
        cy.get(".btn").click()
        cy.get("h2").should("have.text", "Tester Hotel Overview")
        cy.get(".username").should("contain", "Welcome tester02!")
        cy.get(":nth-child(1) > .btn").click()
        cy.get("h2 > div").should("have.text", "Rooms")
        cy.wait(1000)
        cy.get(".user > .btn").click()


    })

}) 

