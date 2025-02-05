/// <reference types="cypress"/>
describe('funcionalidade: login', () => {
    it ('deve fazer login com sucesso', () =>{
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aguinaldo.teste@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aguinaldo.teste (não é aguinaldo.teste? Sair)')


    })
})