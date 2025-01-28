import BasePage from "./BasePage.js"
import {checkoutPage} from "../support/Locators.js"

class CheckoutPage extends BasePage{
    
    enterCheckoutInformation(fname, lname, pcode) {
        this.setElement(checkoutPage.firstName, fname)
        this.setElement(checkoutPage.lastName, lname)
        this.setElement(checkoutPage.postalCode, pcode)
        this.clickElement(checkoutPage.continue)
    }

    completeOrder() {
        this.clickElement(checkoutPage.finish)
    }

    verifyCheckoutComplete(completeMsg) {
        this.assertShouldElement(checkoutPage.completeHeader)
        this.getText(checkoutPage.completeHeader).then((message) => {
            expect(message.trim()).to.equal(completeMsg)
        })
    }
}

export default CheckoutPage;
