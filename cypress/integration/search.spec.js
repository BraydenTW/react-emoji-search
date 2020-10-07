describe('Search', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	const search = (query) => {
		cy.get('.search').clear().type(query)
		cy.get('.item').each(($item) => {
			expect($item.attr('data-keywords').includes(query)).to.be.true
		})
	}

	it('should find emojis', () => {
		['gri', 'cat', 'smile cat'].forEach(query => search(query))
	})

	it('should not find an emojis', () => {
		cy.get('.search').type('dasdnaoianfoianfo')
		cy.get('.results').should('exist')
		cy.get('.item').should('not.exist')
	})
})
