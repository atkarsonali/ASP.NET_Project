describe('test case',()=>{
    it('verify visit',()=>{
         cy.visit('http://localhost:8020', { responseTimeout: 2000000 , timeout: 1000000 })
         cy.wait(20000)
    })
    /*it('verify test',()=>{
        cy.get('.display-4').should('be.visible')
        cy.get('.display-4').should('have.text','Welcome')
    })*/
    
})