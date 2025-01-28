
import BasePage from "./BasePage.js";
import {loginPage,productPage,cartPage} from "../support/Locators.js"

class ProductPage extends BasePage {
    
    sortProduct(element) {
        this.selectElement(productPage.sortProduct, element)
    }

    verifyPriceHiToLo() {
        cy.get('.inventory_item_price').then(($prices) => {
            expect($prices.length).to.be.greaterThan(1);
            cy.wrap($prices).each((price, index, prices) => {
                if (index < prices.length - 1) {
                    cy.wrap(price).invoke('text').then((currentText) => {
                        cy.wrap(prices[index + 1]).invoke('text').then((nextText) => {
                            const currentPrice = parseFloat(currentText.replace('$', ''));
                            const nextPrice = parseFloat(nextText.replace('$', ''));
                            expect(currentPrice).to.be.gte(nextPrice);
                        });
                    });
                }
            });
        });
    }

    verifyPriceLoToHi() {
        cy.get('.inventory_item_price').then(($prices) => {
            expect($prices.length).to.be.greaterThan(1);
            cy.wrap($prices).each((price, index, prices) => {
                if (index < prices.length - 1) {
                    cy.wrap(price).invoke('text').then((currentText) => {
                        cy.wrap(prices[index + 1]).invoke('text').then((nextText) => {
                            const currentPrice = parseFloat(currentText.replace('$', ''));
                            const nextPrice = parseFloat(nextText.replace('$', ''));
                            expect(currentPrice).to.be.lte(nextPrice);
                        });
                    });
                }
            });
        });
    }

    storeProductTitle() {
        const productTitles = []
        
        cy.get(productPage.productTitle).last().then(($prodTitle) => {
            cy.wrap($prodTitle).invoke('text').then((text) => {
                cy.log(text)
                productTitles.push(text)
            })
        })
        .then(() => {        
            cy.wrap(productTitles).as('productTitles')
        })
    }

    /* if addProductTitle() and getProductTitles() are used in the same class, we can use get array getProductTitles() or else use as above, cy.wrap method 
    storeProductTitle() {
        cy.get(productPage.productTitle).last().then(($prodTitle) => {
            cy.wrap($prodTitle).invoke('text').then((text) => {
                cy.log(text)
                this.addProductTitle(text); // Add title to array
            })
        })
    }

    verifyProductTitle() {
        cy.get('.cart_item').each(($cartItem) => {
            cy.wrap($cartItem).find(cartPage.productTitle).invoke('text').then((cartItemTitle) => {
                const prodTitles = this.getProductTitles()
                this.assertExpectElement(cartItemTitle, prodTitles)  
            })
        })
    } */

    addLastProductToCart() {
        cy.get(productPage.addToCart).last().click();
        this.storeProductTitle()
    }

    viewCart() {
        this.clickElement(productPage.viewCart)
    }
}

export default ProductPage;
