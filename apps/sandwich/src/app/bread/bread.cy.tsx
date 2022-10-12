import * as React from 'react';
import Bread from './bread';

describe(Bread.name, () => {
  it('mounts bread', () => {
    cy.mount(<Bread />);
    cy.get('[data-cy=bread]').should(
      'have.css',
      'background-color',
      'rgb(255, 218, 150)'
    );
    cy.get('[data-cy=bread]').should(
      'have.css',
      'border-left',
      '10px solid rgb(211, 136, 92)'
    );
    cy.get('[data-cy=bread]').should(
      'have.css',
      'border-right',
      '10px solid rgb(211, 136, 92)'
    );
    cy.get('[data-cy=bread]').invoke('outerHeight').should('eq', 60);
  });
});
