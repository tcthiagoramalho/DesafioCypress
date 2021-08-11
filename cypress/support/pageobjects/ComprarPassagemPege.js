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
        const currentDat = new Date()
        
        cy.get(passagem.Calendario()).click()
        cy.get(passagem.DataIda()).click({force: true})
        cy.get(passagem.DataVolta()).click({force: true})
        cy.get(passagem.ConfirmeData()).click({force: true})
        cy.get(passagem.BuscarVoo()).click()
        
        if (cy.get(passagem.erro()).should('contain', 'Erro')) {
            cy.get(passagem.btnOkErro()).click({force: true})
        }
    }

    SelecionarVoo() {
        cy.get(passagem.VooIda()).click()
        cy.get(passagem.VooVolta()).click()
    }

    ViewTaxa() {
        cy.scrollTo(0, 1680)
        
    }

    VizualizarResumo() {
        const valorBilheteIda = []
        const valorBilheteVolta = []
        const valorTotalBilhete = []
        const valorTaxa = []

        const somaIdaVolta = valorBilheteIda + valorBilheteVolta
        const somaTaxaBilhete = valorTotalBilhete + valorTaxa

        cy.get(passagem.ValorIda()).invoke('text').then(() => {
            cy.log(valorBilheteIda)
            .should('contain', valorBilheteIda)
        })

        cy.get(passagem.ValorVolta()).invoke('text').then(() => {
            cy.log(valorBilheteVolta)
            .should('contain', valorBilheteVolta)
        })
        
        cy.wait(1000)

        cy.get(passagem.ValorTaxa()).invoke('text').then(() => {
            cy.log(valorTaxa)
            .should('contain', valorTaxa)
        })

        cy.get(passagem.ValorTotalPassagem()).invoke('text').then(() => {
            cy.log(somaIdaVolta)
            .should('contain', somaIdaVolta)
        })

        cy.get(passagem.ValorTotalPedido()).invoke('text').then(() => {
            cy.log(somaTaxaBilhete)
            .should('contain', somaTaxaBilhete)
        })
    }

    AceitarTermos() {
        cy.get(passagem.SetTermo()).click()
        cy.get(passagem.Continuar()).click()

        cy.get(passagem.Login()).should('contain', 'Acesse sua conta')
    } 
}

export default comprarPassagem;
