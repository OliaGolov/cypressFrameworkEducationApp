import {makeDomainName} from '../helpers/subcribeHelper'


describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.viewport(1920, 1080)
  })

  it("allows users to subcribe to the email list", () => {
    const generateEmail = `${makeDomainName(6)}@gamil.com` 
    cy.getByData('email-input').type(generateEmail)
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('exist').contains(`Success: ${generateEmail} has been successfully subscribed`)
  })

  it('does NOT allow a invalid email address', () => {
    const generateWrongEmail = makeDomainName(6)
    cy.getByData('submit-button').click()
    cy.getByData('error-message').should('exist').contains('Email is required')  
  })

  it('does not allow to ssubscribe for email list twise', () => {
    cy.getByData('email-input').type('john@example.com')
    cy.getByData('submit-button').click()
    cy.getByData('server-error-message').should('exist').contains('already exists. Please use a different email address.')
  })
})
