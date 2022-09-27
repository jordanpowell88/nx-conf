import PeanutButter from './peanut-butter'


describe(PeanutButter.name, () => {
  it('mounts with creamy', () => {
    cy.mount(<PeanutButter type='creamy' />)
    cy.get('[data-cy=pb]').should('have.css', 'border', '0px none rgb(0, 0, 0)')
    cy.get('[data-cy=pb]').should('have.css', 'background-color', 'rgb(214, 148, 67)')
  })

  it('mounts with crunchy', () => {
    cy.mount(<PeanutButter type='crunchy' />)
    cy.get('[data-cy=pb]').should('have.css', 'border', '5px dotted rgb(157, 104, 39)')
    cy.get('[data-cy=pb]').should('have.css', 'background-color', 'rgb(214, 148, 67)')
  })

  it('mounts with regular thickness', () => {
    cy.mount(<PeanutButter type='creamy' />)
    cy.get('[data-cy=pb]').invoke('outerHeight').should('eq', 20)
  })

  it('mounts with extra thickness', () => {
    cy.mount(<PeanutButter type='creamy' extra={true} />)
    cy.get('[data-cy=pb]').invoke('outerHeight').should('eq', 40)
  })
})

