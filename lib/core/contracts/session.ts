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

export interface SessionData {
	actor: string;
	scope?: {
		[k: string]: unknown;
	};
	token?: {
		authentication?: string;
		[k: string]: unknown;
	};
	expiration?: string;
	[k: string]: unknown;
}

export interface SessionContractDefinition
	extends ContractDefinition<SessionData> {}

export interface SessionContract extends Contract<SessionData> {}
