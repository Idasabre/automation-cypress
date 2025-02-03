import BasePage from '../pageObjects/BasePage.js'
import LoginPage from '../pageObjects/LoginPage.js'
import ProductPage from '../pageObjects/ProductPage.js'
import CartPage from '../pageObjects/CartPage.js'
import CheckoutPage from '../pageObjects/CheckoutPage.js'

import testdata from '../fixtures/testdata.json';

describe('e2e', () => {

  const base = new BasePage()
  const login = new LoginPage()
  const product = new ProductPage()
  const cart = new CartPage()
  const checkout = new CheckoutPage()


  beforeEach( function() {
    cy.fixture('testdata').then((userData) => {
      this.userData = userData
      const loginData = this.userData.loginData
      login.loginWithSession(loginData.username,loginData.password)
    })
  })
  
  it('verify success login', function() {
    login.verifySuccessLogin(this.userData.page.inventory)
  })

  it('Sort produtc, add product, verify product title in cart and checkout', function() {
    base.navigateToURL(this.userData.page.inventory)
    product.sortProduct(this.userData.sortByPrice)
    product.verifyPriceLoToHi()
    product.addLastProductToCart()

    product.viewCart()
    cart.verifyProductTitle()
    cart.navigateToCheckoutPage()

    const checkInfo = this.userData.checkout.yourInformation
    checkout.enterCheckoutInformation(checkInfo.firstName, checkInfo.lastName, checkInfo.postalCode)
    checkout.completeOrder()
    checkout.verifyCheckoutComplete(this.userData.checkout.complete)
  })
})