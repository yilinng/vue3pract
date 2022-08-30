
describe('The create page', () => {

  it('user create new todo using the create form', () => {
    const id = '7412';
    const title = 'test from create.spec.ts';
    const body = 'And finally, run yarn cypress to finish up the setup process. This will add a cypress folder to your project. All the test files will live here. It will also start the Cypress test runner.';
    const tags = ['c#', 'javascript', 'docker'];

    cy.visit('/create');

    //Fill out the form
    cy.get('input[name="title"]').type(title);
    cy.get('textarea[name="body"]').type(body);

    //keypress enter tags
    tags.map(it => cy.get('input[name="tag"]').type(`${it}{enter}`));

    // Click the sign-in button
    cy.get('button[type=submit]').click();
  })
  

})