/// <reference types="Cypress"/>

import comprarPassagemElements from "../elements/ComprarPassagemElements";

const passagem = new comprarPassagemElements


class comprarPassagem {

    PrencherEndereco() {
        cy.get(passagem.EnderecoIda()).type('São paulo')
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
