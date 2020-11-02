import {shallow} from 'enzyme'
import Results from './Results.js'

it('should render results', () => {
	const emojis = [
		{"title": "1234", "symbol": "🔢", "keywords": "input symbol for numbers symbol"},
		{"title": "Grinning", "symbol": "😀", "keywords": "grinning face happy smiley emotion emotion"},
		{"title": "Grimacing", "symbol": "😬", "keywords": "grimacing face silly smiley emotion emotion selfie selfie"}
	]
	const component = shallow(<Results emojiFiltered={emojis}/>)

	emojis.forEach(emoji => {
		let found = 0
		component.render().find('.item-emoji').each((index, item) => {
			if (emoji.symbol === item.children[0].data) found++
		})
		expect(found > 0)
	})
})
