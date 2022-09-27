import MenuItem from './menu-item'


describe(MenuItem.name, () => {
  it('can mount', () => {
    cy.mount(<MenuItem label='Test' options={[]} valueChange={cy.spy()} />)
    cy.get('label').contains('Test')
    cy.get('select')
  })

  it('calls valueChange with option value', () => {
    cy.mount(<MenuItem label='Test' options={['option 1', 'option 2', 'option 3']} valueChange={cy.spy().as('valueChangeSpy')} />)
    cy.get('select').select('option 1')
    cy.get('@valueChangeSpy').should('have.been.calledWith', 'option 1')
    cy.get('select').select('option 2')
    cy.get('@valueChangeSpy').should('have.been.calledWith', 'option 2')
    cy.get('select').select('option 3')
    cy.get('@valueChangeSpy').should('have.been.calledWith', 'option 3')
  })
})

