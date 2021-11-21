/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

import { core } from '../..';

// tslint:disable: array-type

export interface ExecuteData {
	actor: string;
	target: string;
	payload: {
		card: string;
		data:
			| {
					[k: string]: unknown;
			  }
			| string
			| number
			| boolean
			| unknown[]
			| null;
		error: boolean;
		action: string;
		timestamp: string;
		[k: string]: unknown;
	};
	timestamp: string;
	originator?: string;
	[k: string]: unknown;
}

export interface ExecuteContractDefinition
	extends core.ContractDefinition<ExecuteData> {}

export interface ExecuteContract extends core.Contract<ExecuteData> {}
