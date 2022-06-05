export class LoginPage {
    sendCredentials(url) {
        cy.visit(url)
            .get('[placeholder="Username"]')
            .type('demo')
            .get('[placeholder="Password"]')
            .type('demo')
            .get('#login-button')
            .click()
        
        cy.get('#otp-code')
            .type('0000')
    }

    shouldHaveOverviewTab() {
        cy.get('a#bank-overview')
            .should('have.text', 'Overview')
    }
}

export const loginPage = new LoginPage