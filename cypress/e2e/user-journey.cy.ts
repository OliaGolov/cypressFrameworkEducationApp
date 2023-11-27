describe('User Journey', () => {
    
    beforeEach(() => {
        cy.visit("http://localhost:3000")
      })

    it.only('a user can find a course on the home page and complete the courses lessons', () => {
        //navigate to first course langing page
        cy.getFirstCourse()
        cy.getByData('next-lesson-button').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/app-install-and-overview')
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/installing-cypress-and-writing-our-first-test')
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname').should('eq', '/testing-your-first-application/setting-up-data-before-each-test')
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').contains('Complete Course').click()
        cy.get('h1').contains('Testing Next.js Applications with Cypress')
    })
})