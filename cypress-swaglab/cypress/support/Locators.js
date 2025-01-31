const loginPage = {
  usernameInput: '#user-name',                                          //'//input[@id="user-name"]',
  passwordInput: 'input[name="password"]',                              //'//input[@name="password"]',
  loginButton: 'input[value="Login"]',
}

const productPage = {
  sortProduct: '.product_sort_container',                               //'//select[@class="product_sort_container"]',    
  addToCart: '.btn.btn_primary.btn_small.btn_inventory',
  viewCart: '.shopping_cart_link',
  productTitle: '.inventory_item_name'
}

const cartPage = {
  cartTable: '.cart_item',
  productTitle: '.inventory_item_name',
  checkout: '#checkout'  
}

const checkoutPage = {
  firstName: '#first-name',
  lastName: '#last-name',
  postalCode: '#postal-code',
  continue: '#continue',
  finish: '#finish',
  completeHeader: '.complete-header'
}
export default {loginPage, productPage, cartPage, checkoutPage};
/* // Create an instance of Locators and export it
const locators = new Locators();
export default locators; */