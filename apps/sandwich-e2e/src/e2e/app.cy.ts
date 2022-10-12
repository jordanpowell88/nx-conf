describe('sandwhich', () => {
  beforeEach(() => cy.visit('/'));

  it('should make a sandwhich', () => {
    cy.get('h3').contains('Sandwhich Menu');
    cy.get('select').first().select('creamy');
    cy.get('select').eq(1).select('strawberry');
    cy.get('input').click();
    cy.getBySel('bread');
    cy.getBySel('pb');
    cy.getBySel('jelly');
  });
});
