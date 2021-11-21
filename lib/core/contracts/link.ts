/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import { Contract, ContractDefinition } from './contract';

export interface LinkData {
	to: {
		id: string;
		slug?: string;
		type: string;
		[k: string]: unknown;
	};
	from: {
		id: string;
		slug?: string;
		type: string;
		[k: string]: unknown;
	};
	inverseName: string;
	[k: string]: unknown;
}

export interface LinkContractDefinition extends ContractDefinition<LinkData> {}

export interface LinkContract extends Contract<LinkData> {}
