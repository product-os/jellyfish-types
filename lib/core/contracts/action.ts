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

export interface ActionData {
	filter?: {
		[k: string]: unknown;
	};
	extends?: string;
	arguments: {
		/**
		 * This interface was referenced by `undefined`'s JSON-Schema definition
		 * via the `patternProperty` "^[a-z0-9]+$".
		 */
		[k: string]: {
			[k: string]: unknown;
		};
	};
	[k: string]: unknown;
}

export interface ActionContractDefinition
	extends ContractDefinition<ActionData> {}

export interface ActionContract extends Contract<ActionData> {}
