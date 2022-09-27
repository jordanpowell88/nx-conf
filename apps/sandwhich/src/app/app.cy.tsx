import App from './app'


describe(App.name, () => {
  it('renders', () => {
    cy.mount(<App />)
  })

  it('only displays sandwhich after options have been selected', () => {
    cy.mount(<App />)
    cy.get('p').contains('Waiting on sandwhich order...')
  })

  it('updates sandwhich with peanut butter options', () => {
    cy.mount(<App />)
    cy.get('select').first().select('creamy')
    cy.get('select').eq(1).select('grape')
    cy.get('[data-cy=pb]').invoke('outerHeight').should('eq', 20)
    cy.get('select').first().select('crunchy')
    cy.get('[data-cy=pb]').invoke('outerHeight').should('eq', 30)
    cy.get('[data-cy=pb]').should('have.css', 'border', '5px dotted rgb(157, 104, 39)')
  })

  it('updates sandwhich with jelly flavors', () => {
    cy.mount(<App />)
    cy.get('select').first().select('creamy')
    cy.get('select').eq(1).select('strawberry')
    cy.get('[data-cy=jelly]').invoke('outerHeight').should('eq', 20)
    cy.get('[data-cy=jelly]').should('have.css', 'background-color', 'rgb(233, 76, 45)')
    cy.get('select').eq(1).select('grape')
    cy.get('[data-cy=jelly]').should('have.css', 'background-color', 'rgb(130, 18, 178)')
  })

  it('updates sandwhich with extra toppings', () => {
    cy.mount(<App />)
    cy.get('select').first().select('creamy')
    cy.get('select').eq(1).select('strawberry')
    cy.get('[data-cy=pb]').invoke('outerHeight').should('eq', 20)
    cy.get('[data-cy=jelly]').invoke('outerHeight').should('eq', 20)
    cy.get('input').click()
    cy.get('[data-cy=pb]').invoke('outerHeight').should('eq', 40)
    cy.get('[data-cy=jelly]').invoke('outerHeight').should('eq', 40)
  })
})

