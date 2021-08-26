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

export interface ScheduledActionData {
	options: {
		action: string;
		card?: string;
		type?: string;
		arguments?: {
			[k: string]: unknown;
		};
		context?: {
			[k: string]: unknown;
		};
	};
	schedule: {
		once?: {
			date: string;
		};
		recurring?: {
			start: string;
			end: string;
			interval: string;
		};
	};
	[k: string]: unknown;
}

export interface ScheduledActionContractDefinition
	extends ContractDefinition<ScheduledActionData> {}

export interface ScheduledActionContract
	extends Contract<ScheduledActionData> {}
