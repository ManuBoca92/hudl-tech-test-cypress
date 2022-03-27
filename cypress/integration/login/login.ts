import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { LoginPage } from '../../page-object/LoginPage';

const loginPage = new LoginPage();

Given('I am on hudle login page', () => {
  cy.visit('/login');
});

When('I enter login credentials {string} and {string}', (email, password) => {
  loginPage.fillForm(email, password);
});

And('I click on login button', () => {
  loginPage.clickOnLoginButtion();
});

Then('I should be redirected to url {string}', (url) => {
  cy.url().should('includes', url);
});

And('Login should be {string}', (status) => {
  if (status == 'fail') {
    loginPage.getLoginErrorMessage().should('be.visible');
  }
});
