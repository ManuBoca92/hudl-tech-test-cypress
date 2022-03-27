# hudl-tech-test-cypress

For this project I a BDD test framework using Cypress, Typescript and Cucumber.

## Setup

To run this test, follow these steps;

- Clone repo
- Go into directory and run `yarn` to install all dependcies
- To run tests, use this command `yarn test`
- To see test reports, look at `Test report` section below.

### Test cases

I only covered just 2 test cases, as this project is more about showing the BDD test framework;

- Login with valid credentials
- Login with invalid credentials

## Test report

I used a cucumber html reporter for this project.

Test reports can be found in `\reports\cucumber-htmlreport.html\index.html` when you run the tests locally.

![Test report 1](https://github.com/ManuBoca92/hudl-tech-test-cypress/blob/main/images/Screenshot.png)
![Test report 2](https://github.com/ManuBoca92/hudl-tech-test-cypress/blob/main/images/second.png)

## Linting

Eslint is used for linting. To run **eslint** use `yarn lint` command

To fix eslint errors run `yarn lint --fix`

## Formatting

Prettier is used to format the code automatically on save. To run **prettier** manually, please use this command `yarn format`

## CI/CD

I used **CircleCI** as the CI/CD tool.

### Artifacts

Test reports can be found in the artifcats tab.
