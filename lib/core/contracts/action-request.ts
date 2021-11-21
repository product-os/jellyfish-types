/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

import { Contract, ContractDefinition } from './contract';

// tslint:disable: array-type

export interface ActionRequestData {
	actor: string;
	epoch: number;
	input: {
		id: string;
		[k: string]: unknown;
	};
	action: string;
	context: {
		[k: string]: unknown;
	};
	arguments: {
		[k: string]: unknown;
	};
	timestamp: string;
	originator?: string;
	[k: string]: unknown;
}

export interface ActionRequestContractDefinition
	extends ContractDefinition<ActionRequestData> {}

export interface ActionRequestContract extends Contract<ActionRequestData> {}
