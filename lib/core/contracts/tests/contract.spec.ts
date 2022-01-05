import type { ActionRequestContract } from '../action-request';
import { Contract } from '../contract';

describe('Contract', () => {
	test('can be instantiated', () => {
		const actionRequest: ActionRequestContract = {
			id: 'id1',
			slug: 'slug-1',
			version: '1.0.0',
			type: 'my-type',
			tags: [],
			loop: 'l/product-os',
			markers: [],
			active: true,
			created_at: '2019-06-19T08:32:33.142Z',
			data: {
				action: 'action',
				actor: 'actor',
				arguments: {},
				context: {
					id: 'foobar',
				},
				epoch: 1,
				input: {
					id: 'id2',
				},
				timestamp: 'timestamp',
			},
			requires: [],
			capabilities: [],
		};
		const contract: Contract = actionRequest;
		expect(contract.id).toBe(actionRequest.id);
	});
});
