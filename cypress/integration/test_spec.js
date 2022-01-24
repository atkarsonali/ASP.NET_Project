describe('test case',()=>{
    it('verify visit',()=>{
         cy.visit('http://localhost:8010', { timeout: 30000 })
    })
    it('verify test',()=>{
        cy.get('.display-4').should('be.visible')
        cy.get('.display-4').should('have.text','Welcome')
    })
})