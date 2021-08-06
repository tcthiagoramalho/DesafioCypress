const ambiente = Cypress.config("baseUrl")

class site {

    AbrirBrowser() {
        cy.visit(ambiente)
    }
}

export default site;