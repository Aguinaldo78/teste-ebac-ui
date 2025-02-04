/// <reference types="cypress"/>
describe('funcionalidade: login', () => {
    it ('deve fazer login com sucesso', () =>{
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
})