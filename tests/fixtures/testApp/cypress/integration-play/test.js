/* globals describe,it,cy,Cypress */
describe('eyes.cypress', () => {
  it('runs', () => {
    const url = `http://localhost:${Cypress.config('testPort')}/test.html`;
    cy.visit(url);
    cy.eyesOpen({
      appName: 'some app',
      testName: 'cypress-play-test',
      browser: {width: 1024, height: 768},
      showLogs: true,
      // saveDebugData: true,
    });
    cy.eyesCheckWindow('some tag');
    cy.eyesClose();
  });
});