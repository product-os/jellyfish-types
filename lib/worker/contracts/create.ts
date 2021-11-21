/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

import { core } from '../..';

// tslint:disable: array-type

export interface CreateData {
	actor: string;
	target: string;
	payload?:
		| {
				[k: string]: unknown;
		  }
		| unknown[];
	timestamp: string;
	[k: string]: unknown;
}

export interface CreateContractDefinition
	extends core.ContractDefinition<CreateData> {}

export interface CreateContract extends core.Contract<CreateData> {}
