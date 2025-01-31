# SwagLabs Automation Testing
## Project Overview
This project contains a modular automation script using cypress following the **Page Object Model (POM)** to automate and validate key functionalities of the SwagLabs application. The script ensures smooth end-to-end execution of product selection, cart verification, and checkout.

## Test Scenarios Covered
1. **Login** – Authenticate using valid credentials.
2. **Sort Products** – Sort the product list by price from Low to High.
3. **Add to Cart** – Add the highest-priced product (last item in the sorted list) to the cart.
4. **Verify Product in Cart** – Validate that the correct product has been added.
5. **Proceed to Checkout** – Enter checkout information.
6. **Complete Checkout** – Finalize the order and verify the success message.

## Tech Stack
- **Programming Language:** Javascript
- **Test Framework:** Cypress
- **Design Pattern:** Page Object Model (POM)
- **Tools:** Mochawesome for reporting

## Project Structure
📦 automation-swaglab<br>
┣ 📂 cypress             <br>
&emsp;┣ 📂 e2e           <br>
&emsp;┣ 📂 fixtures      <br>
&emsp;┣ 📂 pageObjects   <br>
&emsp;┣ 📂 Support       <br>
&emsp;┣ 📂 Report        <br>
┣ 📄 package.json        <br>

## Setup and Execution
### Prerequisites
- Install **Node.js** (LTS version recommended)
- Install Cypress dependencies - cypress via npm:
 ```npm install cypress --save-dev```

• To open Cypress Test Runner:
```npx cypress open```

• To run tests in headless mode:
npx cypress run or 
script configured in package.json - ```npm run test:run```

Author: Ida<br>
Contact: nhmsabre@gmail.com<br>
GitHub: Idasbre

