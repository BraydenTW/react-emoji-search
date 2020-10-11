describe('Copy Emoji', () => {
	it('should display emoji copied', () => {
		cy.visit('/')
		cy.get('.search').clear().type('happy')
		cy.get('.item:first').click().then(() => {
			cy.get('.item:first .item-copy.label-true')
			cy.wait(1500)
			cy.get('.item:first .item-copy.label-true').should('not.exist')
			cy.get('.item:first .item-copy.label-false')
		})
	})
})