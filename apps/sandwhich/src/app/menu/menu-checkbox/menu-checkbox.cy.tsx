import * as React from 'react'
import MenuCheckbox from './menu-checkbox'


describe(MenuCheckbox.name, () => {
  it('can mount', () => {
    cy.mount(<MenuCheckbox label='Test' valueChange={cy.spy()}/>)
    cy.get('label').contains('Test')
    cy.get('input')
  })

  it('calls valueChange with checked value', () => {
    cy.mount(<MenuCheckbox label='Test' valueChange={cy.spy().as('valueChangeSpy')} />)
    cy.get('input').click()
    cy.get('@valueChangeSpy').should('have.been.calledWith', true)
    cy.get('input').click()
    cy.get('@valueChangeSpy').should('have.been.calledWith', false)
  })
})

