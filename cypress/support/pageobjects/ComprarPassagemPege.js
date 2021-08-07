/// <reference types="Cypress"/>

import comprarPassagemElements from "../elements/ComprarPassagemElements";

const passagem = new comprarPassagemElements


class comprarPassagem {

    PrencherEndereco() {
        cy.get(passagem.Origem()).type('São Paulo')
        cy.get(passagem.SetOrigem()).click()
        cy.get(passagem.Destino()).type('Rio de janeiro')
        cy.get(passagem.SetDestino()).click()
    }

    PrencherData() {
        cy.get(passagem.Calendario()).click()
        cy.get(passagem.DataIda()).click({force: true})
        cy.get(passagem.DataVolta()).click({farce: true})
        cy.get(passagem.ConfirmeData()).click({force: true})
        cy.get(passagem.BuscarVoo()).click()
    }

    SelecionarVoo() {
        cy.get(passagem.VooIda()).click()
        cy.get(passagem.VooVolta()).click()
    }

    VizualizarResumo() {

    }

    AceitarTermos() {
        cy.get(passagem.SetTermo()).click()
        cy.get(passagem.Continuar()).click()

        cy.get(passagem.Login()).should('contain', 'Acesse sua conta')
    } 
}

export default comprarPassagem;
