/// <reference types="Cypress"/>

import comprarPassagemElements from "../elements/ComprarPassagemElements";

const passagem = new comprarPassagemElements


class comprarPassagem {

    PrencherEndereco() {
        cy.get(passagem.Origem()).click().type('São Paulo')
        cy.get(passagem.SetOrigem()).click()
        cy.get(passagem.Destino()).type('Rio de janeiro')
        cy.get(passagem.SetDestino()).click()
    }

    PrencherData() {

    }

    SelecionarVoo() {

    }

    Termos() {

    }

    VizualizarResumo() {

    }
}

export default comprarPassagem;
