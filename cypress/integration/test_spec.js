describe('test case',()=>{
    it('verify visit',()=>{
         cy.visit('http://localhost:8010', { headers: {
            "Accept-Encoding": "gzip, deflate"
        } 
    })
    })
    it('verify test',()=>{
        cy.get('.display-4').should('be.visible')
        cy.get('.display-4').should('have.text','Welcome')
    })
})