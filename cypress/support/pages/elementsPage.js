export class Elements {
    goToTextForm() {
        cy.visit('https://demoqa.com/text-box')
            .get('.main-header').should('contain', 'Text Box')
    }

    fillTextForm() {
        cy.get('#userName').type('FullTest check')
            .should('have.value', 'FullTest check')
        cy.get('#userEmail').type('test@test.com')
            .should('have.value', 'test@test.com')
        cy.get('#currentAddress').type('Izhevsk, Raionnaia street 57k1s1, 129')
            .should('have.value', 'Izhevsk, Raionnaia street 57k1s1, 129')
        cy.get('#permanentAddress').type('In hac habitasse platea dictumst. Aenean sit.')
            .should('have.value', 'In hac habitasse platea dictumst. Aenean sit.')
    }

    submitForm() {
        cy.get('#submit').click()
    }

    checkValidForm() {
        cy.get('p#name').should('include.text', 'FullTest check')
        cy.get('p#email').should('include.text', 'test@test.com')
        cy.get('p#currentAddress').should('include.text', 'Izhevsk')
        cy.get('p#permanentAddress').should('include.text', 'habitasse')
    }

    goToCheckboxForm() {
        cy.visit('https://demoqa.com/checkbox')
        cy.get('button[title="Expand all"]').click()
    }

    checkSomeCheckboxes() {
        cy.contains('Public').click()
        cy.contains('Classified').click()
        cy.contains('React').click()
        cy.contains('Word File').click()
    }

    verifySelectedCheckboxes() {
        cy.get('#result').should('include.text', 'public')
        cy.get('#result').should('include.text', 'classified')
        cy.get('#result').should('include.text', 'react')
        cy.get('#result').should('include.text', 'wordFile')
    }
    
    goToRadioForm() {
        cy.visit('https://demoqa.com/radio-button')
    }

    clickYesRadio() {
        cy.get('#yesRadio').check({force: true})
            .should('be.checked')
    }

    verifyYesRadio() {
        cy.get('.text-success').should('include.text', 'Yes')
    }

    clickImpressiveRadio() {
        cy.get('#impressiveRadio').check()
            .should('be.checked')
    }

    verifyImpressiveRadio() {
        cy.get('.text-success').should('include.text', 'Impressive')
    }

    verifyNoDisabled() {
        cy.get('#noRadio').should('be.disabled')
    }
    
    goToButtonsForm() {
        cy.visit('https://demoqa.com/buttons')
    }

    doubleClickButton() {
        cy.get('#doubleClickBtn').dblclick()
    }

    checkSuccessDoubleclick() {
        cy.get('#doubleClickMessage').should('include.text', 'double')
    }

    rightClickButton() {
        cy.get('#rightClickBtn').rightclick()
    }

    checkSuccessRightclick() {
        cy.get('#rightClickMessage').should('include.text', 'right')
    }

    clickMeButton() {
        cy.get('button.btn').last().click()
    }

    checkSuccessDynamicClick() {
        cy.get('#dynamicClickMessage').should('include.text', 'dynamic')
    }
}

export const elemPage = new Elements