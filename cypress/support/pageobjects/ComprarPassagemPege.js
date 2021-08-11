/// <reference types="Cypress"/>

import comprarPassagemElements from "../elements/ComprarPassagemElements";

const element = new comprarPassagemElements
class comprarPassagem {

    LocalDaViagem() {
        cy.get(element.Origem()).type('São Paulo')
        cy.get(element.SetOrigem()).click()
        cy.get(element.Destino()).type('Rio de janeiro')
        cy.get(element.SetDestino()).click()
    }

    PrencherData() {
        const currentDate = new Date()

        const departureMonth = currentDate.getMonth();
        const departureDate = currentDate.getDate() + 10

        currentDate.setDate(departureDate + 30);
        const arrivalMonth = currentDate.getMonth();
        const arrivalDate = currentDate.getDate();
                
        cy.get(element.AbrirCalendario()).click()
        cy.get(element.SetDataIda()).contains(departureDate).click({force: true})
        for (let i = 1; i <= arrivalMonth - departureMonth; i++) {
            cy.get(element.DataVoltaProximoMes()).click({force: true})
        }
        cy.get(element.SetDataVolta()).contains(arrivalDate).click({force: true})
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

    async VizualizarResumo() {
        let valorDeIda = 0
        let valorDeVolta = 0
        let valorTotal = 0
        let valorDaTaxa = 0

        const getSomaIdaVolta = () => valorDeIda + valorDeVolta 
        const getSomaTaxaBilhete = () => valorTotal + valorDaTaxa 

        await cy.get(element.ValorBilheteIda()).invoke('text').then((value) => {
            cy.expect(isNaN(Number(value))).to.be.false
            valorDeIda = Number(value)
            cy.log(valorDeIda)
            .should('contain', valorDeIda)
        })

        await cy.get(element.ValorBilheteVolta()).invoke('text').then((value) => {
            cy.expect(isNaN(Number(value))).to.be.false
            valorDeVolta = Number(value)
            cy.log(valorDeVolta)
            .should('contain', valorDeVolta)
        })
        
        await cy.get(element.ValorTaxaEmbarque()).invoke('text').then((value) => {
            cy.expect(isNaN(Number(value))).to.be.false
            valorDaTaxa = Number(value)
            cy.log(valorDaTaxa)
            .should('contain', valorDaTaxa)
        })

        await cy.get(element.ValorTotalDoBilhete()).invoke('text').then((value) => {
            cy.expect(isNaN(Number(value))).to.be.false
            valorTotal = Number(value)
            cy.log(getSomaIdaVolta())
            .should('contain', getSomaIdaVolta())
        })

        cy.get(element.ValorTotal())
            .log(getSomaTaxaBilhete())
            .should('contain', getSomaTaxaBilhete())
    }

    AceitarTermosContinuar() {
        cy.get(element.AceitaTermos()).click()
        cy.get(element.Continuar()).click()

        cy.get(element.TelaDeLogin()).should('contain', 'Acesse sua conta')
    } 
}

export default comprarPassagem;
