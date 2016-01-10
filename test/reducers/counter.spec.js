import expect from 'expect';
import counter from '../../reducers/counter';
import { INCREMENT, DECREMENT } from '../../actions/counter';

describe('reducers', () => {
	describe('counter', () => {
		it('should handle initial state', () => {
			expect(counter(undefined, {})).toBe(0);
		});

		it('should handle INCREMENT', () => {
			expect(counter(1, { type: INCREMENT })).toBe(2);
		});

		it('should handle DECREMENT', () => {
			expect(counter(1, { type: DECREMENT })).toBe(0);
		});

		it('should handle unknown action type', () => {
			expect(counter(1, { type: 'unknown' })).toBe(1);
		});
	});
});
