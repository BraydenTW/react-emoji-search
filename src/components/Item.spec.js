import {shallow} from 'enzyme'
import Item from './Item.js'

it('should render item', () => {
	const item = {id: '123456', symbol: '🚀', title: 'Rocket', keywords: 'rocket space'}
	const component = shallow(<Item id={item.id} symbol={item.symbol} title={item.title} keywords={item.keywords} key={item.id}/>)

	expect(component.find('.item-emoji').text() === item.symbol).toBeTruthy()
	expect(component.prop('data-clipboard-text') === item.symbol).toBeTruthy()
	expect(component.prop('data-keywords') === item.keywords).toBeTruthy()
})

it('should display label on click', () => {
	const item = {id: '123456', symbol: '🚀', title: 'Rocket', keywords: 'rocket space'}
	const component = shallow(<Item id={item.id} symbol={item.symbol} title={item.title} keywords={item.keywords} key={item.id}/>)
	
	component.simulate('click')
	expect(component.find('.label-true')).toHaveLength(1)
	expect(component.find('.label-false')).toHaveLength(0)
	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			expect(component.find('.label-true')).toHaveLength(0)
			expect(component.find('.label-false')).toHaveLength(1)
			resolve()
		}, 1500)
	})
})
