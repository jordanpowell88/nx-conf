import Menu from './menu';

describe(Menu.name, () => {
  it('mounts Menu', () => {
    cy.mount(
      <Menu
        peanutButterChange={cy.spy()}
        jellyChange={cy.spy()}
        extraChange={cy.spy()}
      />
    );
    cy.get('h3').contains('Sandwhich Menu');
    cy.get('label').contains('Peanut Butter');
    cy.get('label').contains('Jelly');
    cy.get('label').contains('Extra');
    cy.get('hr');
  });

  it('handles menu item changes', () => {
    cy.mount(
      <Menu
        peanutButterChange={cy.spy().as('pbChange')}
        jellyChange={cy.spy().as('jellyChange')}
        extraChange={cy.spy().as('extraChange')}
      />
    );
    cy.get('select').first().select('crunchy');
    cy.get('@pbChange').should('have.been.calledWith', 'crunchy');
    cy.get('select').first().select('creamy');
    cy.get('@pbChange').should('have.been.calledWith', 'creamy');
    cy.get('select').eq(1).select('strawberry');
    cy.get('@jellyChange').should('have.been.calledWith', 'strawberry');
    cy.get('select').eq(1).select('grape');
    cy.get('@jellyChange').should('have.been.calledWith', 'grape');
    cy.get('input').click();
    cy.get('@extraChange').should('have.been.calledWith', true);
    cy.get('input').click();
    cy.get('@extraChange').should('have.been.calledWith', false);
  });
});
