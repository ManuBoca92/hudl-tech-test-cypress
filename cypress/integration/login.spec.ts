import { LoginPage } from '../page-object/LoginPage';
import { credentials } from '../fixtures/credentials';

const loginPage = new LoginPage();

describe('Login tests', () => {
  beforeEach('Go to login page', () => {
    cy.visit('/login');
  });

  credentials.forEach((user) => {
    it(`logs in a user with ${user.testCase}`, () => {
      loginPage.fillForm(user.email, user.password);
      loginPage.clickOnLoginButtion();
      if (user.testCase === 'valid credentials') {
        cy.url().should('include', '/home');
      } else {
        loginPage.getLoginErrorMessage().should('be.visible');
      }
    });
  });
});
