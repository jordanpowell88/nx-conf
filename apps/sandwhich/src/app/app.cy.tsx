import App from './app'


describe(App.name, () => {
  it('renders', () => {
    cy.mount(<App />)
  })
})

