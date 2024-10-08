describe('login form', () => {
  beforeEach(() => {
    cy.visit('/order');
  });

  it('The button is disabled in the selection under Minimum ingredient selection.', () => {
    cy.get('[data-cy="checkbox"]').each((checkbox, index) => {
      if (index < 3) {
        cy.wrap(checkbox).check();
      }
    });
    cy.get('[data-cy="submitbutton"]').should('be.disabled');
  });

  it('The button is disabled in the selection above the Maximum ingredient selection.', () => {
    cy.get('[data-cy="checkbox"]').check();
    cy.get('[data-cy="submitbutton"]').should('be.disabled');
  });

  it('The button is disabled if name input is under 3 characters', () => {
    cy.get('[data-cy="nameinput"]').type('ab');
    cy.get('[data-cy="submitbutton"]').should('be.disabled');
  });

  it('The button is disabled if the name entry is correct but the checkbox amount is incorrect', () => {
    cy.get('[data-cy="checkbox"]').each((checkbox, index) => {
      if (index < 3) {
        cy.wrap(checkbox).check();
      }
    });
    cy.get('[data-cy="nameinput"]').type('john');
    cy.get('[data-cy="submitbutton"]').should('be.disabled');
  });

  it('The button is disabled if the name entry is incorrect but the checkbox amount is correct', () => {
    cy.get('[data-cy="checkbox"]').each((checkbox, index) => {
      if (index < 6) {
        cy.wrap(checkbox).check();
      }
    });
    cy.get('[data-cy="nameinput"]').type('jo');
    cy.get('[data-cy="submitbutton"]').should('be.disabled');
  });

  it('Button active if conditions are met', () => {
    cy.get('[data-cy="checkbox"]').each((checkbox, index) => {
      if (index < 6) {
        cy.wrap(checkbox).check();
      }
    });
    cy.get('[data-cy="nameinput"]').type('john');
    cy.get('[data-cy="submitbutton"]').should('be.enabled');
  });

  it('redirects to the success page when the button is pressed', () => {
    cy.get('[data-cy="checkbox"]').each((checkbox, index) => {
      if (index < 6) {
        cy.wrap(checkbox).check();
      }
    });
    cy.get('[data-cy="nameinput"]').type('john');
    cy.get('[data-cy="submitbutton"]').click();

    cy.url().should('include', '/success');
  });
});
