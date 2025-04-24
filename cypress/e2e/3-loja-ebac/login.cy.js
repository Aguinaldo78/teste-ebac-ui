/// <reference types="cypress"/>
describe('funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
     /// afterEach(() => {
       /// cy.screenshot ()
   /// });
      it ('deve fazer login com sucesso', () => {
        cy.get('#username').type('aguinaldo.teste@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aguinaldo.teste (não é aguinaldo.teste? Sair)')
    });
    it ('Deve aparecer uma mensagem de erro ao insirir um usuario invalido', () => {
        cy.get('#username').type('aguinaldos.teste@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.' )
        cy.get('.woocommerce-error').should ('exist')
    });
    it ('Deve aparecer uma mensagem de erro ao insirir uma senha invalida', () => {
        cy.get('#username').type('aguinaldo.teste@gmail.com')
        cy.get('#password').type('1234560')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should ('contain' , 'Erro: A senha fornecida para o e-mail aguinaldo.teste@gmail.com está incorreta. Perdeu a senha')
    });
})