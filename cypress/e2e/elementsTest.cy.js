/// <reference types="cypress" />

import { elemPage } from "../support/pages/elementsPage"


context('TextBox', () => {
    it('TextBox test', () => {
        elemPage.goToTextForm()
        elemPage.fillTextForm()
        elemPage.submitForm()
        elemPage.checkValidForm()
    })

    it('CheckBox test', () => {
        elemPage.goToCheckboxForm()
        elemPage.checkSomeCheckboxes()
        elemPage.verifySelectedCheckboxes()
    })

    it('Radiobuttons check', () => {
        elemPage.goToRadioForm()

        elemPage.clickYesRadio()
        elemPage.verifyYesRadio()
        
        elemPage.clickImpressiveRadio()
        elemPage.verifyImpressiveRadio()

        elemPage.verifyNoDisabled()
    })

    it('Buttons check', () => {
        elemPage.goToButtonsForm()

        elemPage.doubleClickButton()
        elemPage.checkSuccessDoubleclick()

        elemPage.rightClickButton()
        elemPage.checkSuccessRightclick()

        elemPage.clickMeButton()
        elemPage.checkSuccessDynamicClick()

    })
})