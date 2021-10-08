/// <reference types="Cypress" />

describe("Primer reto en la página ToolsQA", () =>{

    it("1.1 Acceder a distintos elementos del DOM", () =>{
        cy.visit("https://demoqa.com/") 
        cy.get(".category-cards > :nth-child(1)").should("be.visible").click()
    })



})