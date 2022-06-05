export class QuoteForm {
    goToQuote(url) {
        cy.visit(url)
        .get('#gdpr-allow-all').click()
        .get('.product-nav__links-wrapper .cta-button__link')
        .click()
    }

    fillAutoForm() {
        cy.get('.textbox')
            .type('Wal')
            .wait(200)
            .type('sall')
            .wait(200)
            .type(' foot')
            .wait(200)
            .type('ball')
            .wait(200)
        cy.contains('WS1').click()
    }

    biffaCustomerNo() {
        cy.get('div.radio-group__inner > label:nth-child(4)')
            .dblclick()
    }

    chooseRandomSector() {
        cy.get(`div.get-started__sector__content > div:nth-child(${Math.floor(Math.random() * 6) + 1})`)
            .click()
    }

    submitForm() {
        cy.get('button[type="submit"]')
            .click()
        cy.wait(500)
    }

    fillManualForm() {
        cy.get('.textbox').type('green')
        .get('[title="Enter address manually"]').click()
        .wait(500)
        .get('[name="line1"]').type('Walsall Football Club')
        .get('[name="line2"]').type('Bescot Stadium')
        .get('[name="city"]').type('Walsall')
        .get('[name="postalCode"]').type('WS1 1QA')
    }

    clickAdressLookup() {
        cy.get('.address-form__button--edit').click()
    }

    clearAdressForm() {
        cy.get('[name="fullAddress"]').clear()
    }

    checkRedirectWasteStream() {
        cy.get('.waste-stream__form h2').should('contain', 'type of waste')
    }

    checkCtaActive() {
        cy.get('button[type="submit"]').should('not.have.class', 'quote-button--disabled')
    }

    checkCtaInactive() {
        cy.get('button[type="submit"]').should('have.class', 'quote-button--disabled')  
    }
}

export const quoteForm = new QuoteForm