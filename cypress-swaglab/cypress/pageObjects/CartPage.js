import {cartPage} from "../support/Locators.js";
import BasePage from "./BasePage.js";

class CartPage extends BasePage {

   verifyProductTitle() {
        cy.get(cartPage.cartTable).each(($cartItem) => {
            cy.wrap($cartItem).find(cartPage.productTitle).invoke('text').then((cartItemTitle) => {
                cy.get('@productTitles').then((prodTitles) => {
                    this.assertExpectElement(cartItemTitle, prodTitles)
                })
            })
        })
    }

    /* cannot use getProductTitles() as titles is set (addProductTitle() in different class (ProductPage)
    verifyProductTitle() {
        cy.get(cartPage.cartTable).each(($cartItem) => {
            cy.wrap($cartItem).find(cartPage.productTitle).invoke('text').then((cartItemTitle) => {
                const prodTitles = this.getProductTitles()
                this.assertExpectElement(cartItemTitle, prodTitles)  
        })
    } */

    navigateToCheckoutPage() {
        this.clickElement(cartPage.checkout)
    }
}

export default CartPage;
