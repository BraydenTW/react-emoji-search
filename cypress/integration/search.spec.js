describe('Search', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	const search = (query) => {
		cy.get('.search').clear().type(query)
		const queryKeywords = query.trim().split(' ')
		let emojisFound = 0

		return new Promise((resolve, reject) => {
			cy.get('.item').each(($item) => {
				const emojiKeywords = $item.attr('data-keywords').trim().split(' ')
				const found = queryKeywords.some(queryKeyword => emojiKeywords.some(emojiKeyword => emojiKeyword.indexOf(queryKeyword) !== -1))
				if (found) emojisFound++
			}).then(() => {
				expect(emojisFound > 0).to.be.true
				resolve(emojisFound)
			})
		})
	}

	it('should find emojis', () => {
		['gri', 'cat', 'smile cat'].forEach(query => search(query))
	})

	it('should find same number of results', () => {
		const resultsSmileCat = search('smile cat')
		const resultsCatSmile = search('cat smile')
		Promise.all([resultsSmileCat, resultsCatSmile]).then(values => {
			expect(values[0] === values[1]).to.be.true
		})

		const resultsGriHappy = search('gri happy')
		const resultsHappyGri = search('happy gri')
		Promise.all([resultsGriHappy, resultsHappyGri]).then(values => {
			expect(values[0] === values[1]).to.be.true
		})
	})

	it('should not find emojis', () => {
		cy.get('.search').type('dasdnaoianfoianfo')
		cy.get('.results').should('exist')
		cy.get('.item').should('not.exist')
	})
})
