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

export interface ViewData {
	actor?: string;
	allOf?: {
		name: string;
		schema: {
			type: 'object';
			[k: string]: unknown;
		};
	}[];
	anyOf?: {
		name: string;
		schema: {
			type: 'object';
			[k: string]: unknown;
		};
	}[];
	/**
	 * A list of data types this view can return
	 */
	types?: string[];
	schema?: {
		[k: string]: unknown;
	};
	namespace?: string;
	[k: string]: unknown;
}

export interface ViewContractDefinition extends ContractDefinition<ViewData> {}

export interface ViewContract extends Contract<ViewData> {}
