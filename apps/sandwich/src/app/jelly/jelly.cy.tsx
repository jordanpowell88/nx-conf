import Jelly from './jelly';

describe(Jelly.name, () => {
  it('mounts with grape', () => {
    cy.mount(<Jelly flavor="grape" />);
    cy.get('[data-cy=jelly]').should(
      'have.css',
      'background-color',
      'rgb(130, 18, 178)'
    );
  });

  it('mounts with strawberry', () => {
    cy.mount(<Jelly flavor="strawberry" />);
    cy.get('[data-cy=jelly]').should(
      'have.css',
      'background-color',
      'rgb(233, 76, 45)'
    );
  });

  it('mounts with regular thickness', () => {
    cy.mount(<Jelly flavor="grape" />);
    cy.get('[data-cy=jelly]').invoke('outerHeight').should('eq', 20);
  });

  it('mounts with extra thickness', () => {
    cy.mount(<Jelly flavor="grape" extra={true} />);
    cy.get('[data-cy=jelly]').invoke('outerHeight').should('eq', 40);
  });
});
