import expect from 'expect';
import * as actions from '../../actions/counter';


describe('actions', () => {
	it('increment should create increment action', () => {
		expect(actions.increment()).toEqual({ type: actions.INCREMENT });
	});

	it('decrement should create decrement action', () => {
		expect(actions.decrement()).toEqual({ type: actions.DECREMENT });
	});
});
