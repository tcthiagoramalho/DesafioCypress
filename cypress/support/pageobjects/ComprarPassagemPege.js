/// <reference types="Cypress"/>

import comprarPassagemElements from "../elements/ComprarPassagemElements";

const element = new comprarPassagemElements

    let valorDeIda = 0
    let valorDeVolta = 0
    let valorTotal = 0
    let valorDaTaxa = 0
class comprarPassagem {

    LocalDaViagem() {
        cy.get(element.Origem()).type('São Paulo')
        cy.get(element.SetOrigem()).click()
        cy.get(element.Destino()).type('Rio de janeiro')
        cy.get(element.SetDestino()).click()
    }

    PrencherData() {
        const dataAtual = new Date()
        const mesDePartida = dataAtual.getMonth();
        const dataDePartida = dataAtual.getDate() + 10
        const mesDeChegada = dataAtual.getMonth();
        const dataDeChagada = dataAtual.getDate();
        dataAtual.setDate(dataDePartida + 30);

        cy.get(element.AbrirCalendario()).click()

        cy.get(element.SetDataIda()).contains(dataDePartida).click({force: true})
        for (let i = 1; i <= mesDeChegada - mesDePartida; i++) {
            cy.get(element.DataVoltaProximoMes()).click({force: true})
        }
        cy.get(element.SetDataVolta()).contains(dataDeChagada).click({force: true})

        cy.get(element.ConfirmaData()).click({force: true})
        cy.get(element.BuscarVoos()).click()

        cy.get(element.erro()).should('have.class', 'fade') // se tem a class fade é porque não tem erro/está escondido
    }

    SelecionarVoos() {
        cy.get(element.SelecionarVooDeIda()).click()
        cy.get(element.SelecionarVooDeVolta()).click()
    }

    ViewTaxa() {
        cy.scrollTo(0, 1680)
        cy.get(element.FormaDePagTaxa()).should('be.checked')
    }

    async ObtervaloresDoBilhete() {
        await cy.get(element.ValorBilheteIda()).invoke('text').then((value) => {
            cy.expect(isNaN(Number(value))).to.be.false
            valorDeIda = Number(value)
            cy.log(valorDeIda)
            cy.log(value)
            .should('contain', valorDeIda)
        })

        await cy.get(element.ValorBilheteVolta()).invoke('text').then((value) => {
            cy.expect(isNaN(Number(value))).to.be.false
            valorDeVolta = Number(value)
            cy.log(valorDeVolta)
            cy.log(value)
            .should('contain', valorDeVolta)
        })
    
        await cy.get(element.ValorTaxaEmbarque()).invoke('text').then((value) => {
            cy.expect(isNaN(Number(value))).to.be.false
            valorDaTaxa = Number(value)
            cy.log(valorDaTaxa)
            cy.log(value)
            .should('contain', valorDaTaxa)
        })
    }

    async ValidarTotalDoBilhete() {
        const getSomaIdaVolta = () => valorDeIda + valorDeVolta 

        await cy.get(element.ValorTotalDoBilhete()).invoke('text').then((value) => {
            cy.expect(isNaN(Number(value))).to.be.false
            valorTotal = Number(value)
            cy.log(getSomaIdaVolta())
            cy.log(value)
            .should('contain', getSomaIdaVolta())
        })
    }

    async ValidarValorTotal() {
        const getSomaTaxaBilhete = () => valorTotal + valorDaTaxa 

        await cy.get(element.ValorTotal()).invoke('text').then((value) => {
            cy.log(value)
            cy.log(getSomaTaxaBilhete())
            .should('contain', getSomaTaxaBilhete())
        })
    }

    AceitarTermosContinuar() {
        cy.get(element.AceitaTermos()).click()
        cy.get(element.Continuar()).click()

        cy.get(element.TelaDeLogin()).should('contain', 'Acesse sua conta')
    } 
}

export default comprarPassagem;
