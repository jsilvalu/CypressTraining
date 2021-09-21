describe("Hello World", () => {
    it("Mi primer test", () => {
        cy.log("Hello Cypress")
        cy.wait(1000)
    
    })

    it("Mi segundo test", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("Juan Antonio")
        cy.wait(1000)
    })
})