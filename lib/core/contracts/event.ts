/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import { Contract, ContractDefinition } from './contract';

export interface EventData {
	actor: string;
	target: string;
	payload?: {
		[k: string]: unknown;
	};
	timestamp: string;
	[k: string]: unknown;
}

export interface EventContractDefinition
	extends ContractDefinition<EventData> {}

export interface EventContract extends Contract<EventData> {}
