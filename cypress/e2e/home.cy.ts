describe('home page', () => {

  it('the h1 contains the correct text', () => {
    cy.visit('http://localhost:3000')
  })

  context('hero section', () => {
    it('h1 contains the correct text', () => {
      cy.get('h1')
      .contains('Testing Next.js Applications with Cypress')
    })
    it('the features on the homepage are correct', () => {
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context('Courses section', () => {
    it.only('Course: Testing Your First Next.js Application', () => {
      
    })
  })

})