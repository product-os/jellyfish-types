/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { Operation } from 'fast-json-patch';
import { JSONSchema } from '../json-schema';
import { Backend, BackendStatus, QueryOptions, Stream } from './backend';
import {
	ContractMap,
	Contract,
	ContractDefinition,
	ContractData,
} from './contracts';
import { CoreErrors } from './errors';
import { Context } from './context';

export interface KernelStatus {
	backend: BackendStatus;
}

export interface KernelSessions {
	admin: string;
}

export interface JellyfishKernel {
	backend: Backend;
	errors: CoreErrors;
	cards: ContractMap;
	sessions: KernelSessions;
	disconnect: (context: Context) => Promise<void>;
	initialize: (context: Context) => Promise<void>;
	getCardById: <TContract extends Contract>(
		context: Context,
		session: string,
		id: string,
	) => Promise<TContract | null>;
	getCardBySlug: <TContract extends Contract>(
		context: Context,
		session: string,
		slug: string,
	) => Promise<TContract | null>;
	insertCard: <TContractData extends ContractData>(
		context: Context,
		session: string,
		contract: ContractDefinition<TContractData>,
	) => Promise<Contract<TContractData>>;
	replaceCard: <TContractData extends ContractData>(
		context: Context,
		session: string,
		contract: ContractDefinition<TContractData>,
	) => Promise<Contract<TContractData>>;
	patchCardBySlug: <TContract extends Contract>(
		context: Context,
		session: string,
		slug: string,
		patch: Operation[],
	) => Promise<TContract>;
	query: <TContract extends Contract>(
		context: Context,
		session: string,
		schema: JSONSchema,
		options?: QueryOptions,
	) => Promise<TContract[]>;
	stream: (
		context: Context,
		session: string,
		schema: JSONSchema,
	) => Promise<Stream>;
	defaults: <TContract extends Contract>(
		contract: Partial<TContract>,
	) => TContract;
	getStatus: () => Promise<KernelStatus>;
}
