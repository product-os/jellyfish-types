import { Contract } from '../contract';
import type { LoopContract } from '../loop';

describe('Contract', () => {
	test('can be instantiated', () => {
		const loop: LoopContract = {
			id: 'id1',
			slug: 'slug-1',
			version: '1.0.0',
			type: 'my-type',
			tags: [],
			loop: '',
			markers: [],
			active: true,
			created_at: '2019-06-19T08:32:33.142Z',
			data: {
				roles: ['loop'],
			},
			requires: [],
			capabilities: [],
		};
		const contract: Contract = loop;
		expect(contract.id).toBe(loop.id);
	});
});
