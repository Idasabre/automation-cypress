class BasePage {

    constructor() {
        this.productTitles = []
    }

    navigateToURL(url) {
        cy.visit(url, {failOnStatusCode: false})
    }

    getText(selector) {
        return cy.get(selector).invoke('text')
    }

    setElement(selector, text) {
        cy.get(selector).clear().type(text)
    }

    clickElement(selector) {
        cy.get(selector).click()
    }

    selectElement(selector, element) {
        cy.get(selector).select(element)
    }

    assertExpectElement(expected, actual) {
        expect(actual).to.include(expected)
    }

    assertShouldElement(selector) {
        cy.get(selector).should('be.visible')
    }

    assertURL(url) {
        cy.url().should('include',url)
    }

    addProductTitle(title) {
        this.productTitles.push(title)
    }

    getProductTitles() {
        return this.productTitles
    } 
}

export default BasePage;