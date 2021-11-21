/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import { core } from '../..';

export interface UpdateData {
	actor: string;
	target: string;
	payload: unknown[];
	timestamp: string;
	[k: string]: unknown;
}

export interface UpdateContractDefinition
	extends core.ContractDefinition<UpdateData> {}

export interface UpdateContract extends core.Contract<UpdateData> {}
