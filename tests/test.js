import { expect } from 'chai';
import t from '../dist/index';

describe('aw000004', () => {
	it('call service', async () => {
		window.host = 'http://127.0.0.1:8889';
		const r = await t('/pg001/zj-001/s001');
		expect(r).eq('mm');
	});
});
