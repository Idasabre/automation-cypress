import BasePage from './BasePage.js'
import {loginPage,productPage} from "../support/Locators.js";

class LoginPage extends BasePage {
    
    loginWithSession(username, password) {
        cy.session([username, password], () => {
            this.navigateToURL('/')
            this.setElement(loginPage.usernameInput, username)
            this.setElement(loginPage.passwordInput, password)
            this.clickElement(loginPage.loginButton)
        }, {
            cacheAcrossSpecs: true,  
        });
    }

    verifySuccessLogin(url) {
        this.navigateToURL(url)
        this.assertShouldElement(productPage.sortProduct)
    }
}

export default LoginPage;