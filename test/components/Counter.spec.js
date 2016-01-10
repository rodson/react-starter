import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Counter from '../../components/Counter';

function setup() {
	const actions = {
		increment: expect.createSpy(),
		decrement: expect.createSpy()
	};

	const component = TestUtils.renderIntoDocument(<Counter counter={1} {...actions} />);
	const buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
	const p = TestUtils.findRenderedDOMComponentWithTag(component, 'p');

	return {
		actions,
		component,
		buttons
	};
}

// describe('Counter component', () => {
// 	it('should display count', () => {
// 		const { p } = setup();
// 		expect(p.textContent).toMatch(/^Clicked: 1 times/);
// 	});

// 	it('first button should call increment', () => {
// 		const { buttons, actions } = setup();
// 		TestUtils.Simulate.click(buttons[0]);
// 		expect(actions.increment).toHaveBeenCalled();
// 	});
// });
