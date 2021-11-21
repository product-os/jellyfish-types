/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

import { ProducerOptions } from '../../queue';
import { Contract, ContractDefinition } from './contract';

export interface ScheduledActionData {
	options: ProducerOptions;
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
