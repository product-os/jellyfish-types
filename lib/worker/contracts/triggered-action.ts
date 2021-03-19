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

import { core } from '../..';

export type TriggeredActionData = TriggeredActionData1 & TriggeredActionData2;
export type TriggeredActionData2 = {
	[k: string]: unknown;
};

export interface TriggeredActionData1 {
	mode?: 'insert' | 'update';
	type?: string;
	action?: string;
	filter?: {
		[k: string]: unknown;
	};
	target?:
		| string
		| {
				[k: string]: unknown;
		  }
		| string[];
	interval?: string;
	/**
	 * Indicates whether the triggered action should be executed synchronously, asynchronously or enqueued
	 */
	schedule?: 'async' | 'sync' | 'enqueue';
	arguments?: {
		[k: string]: unknown;
	};
	startDate?: string;
	[k: string]: unknown;
}

export interface TriggeredActionContractDefinition
	extends core.ContractDefinition<TriggeredActionData> {}

export interface TriggeredActionContract
	extends core.Contract<TriggeredActionData> {}
