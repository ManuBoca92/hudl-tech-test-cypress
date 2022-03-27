export class LoginPage {
  getUserName() {
    return cy.get('#email');
  }

  getPassword() {
    return cy.get('#password');
  }

  getSignInBtn() {
    return cy.get('#logIn');
  }

  getLoginErrorMessage() {
    return cy.get('.login-error-container');
  }

  fillForm(username?: string, password?: string) {
    this.getUserName().clear().type(username);
    this.getPassword().clear().type(password);
  }

  clickOnLoginButtion() {
    this.getSignInBtn().click();
  }
}
