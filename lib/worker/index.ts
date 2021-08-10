/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

export * from './contracts';
import { Operation } from 'fast-json-patch';
import { core, JSONSchema } from '../';
import { WorkerErrors } from './errors';

export interface WorkerContext {
	errors: WorkerErrors;
	defaults: core.JellyfishKernel['defaults'];
	sync: any;
	getEventSlug: (type: string) => Promise<string>;
	getCardById: (lsession: string, id: string) => Promise<core.Contract | null>;
	getCardBySlug: (
		lsession: string,
		slug: string,
	) => Promise<core.Contract | null>;
	query: <T extends core.Contract = core.Contract>(
		lsession: string,
		schema: Parameters<core.JellyfishKernel['query']>[2],
		options: Parameters<core.JellyfishKernel['query']>[3],
	) => Promise<T[]>;
	privilegedSession: string;
	insertCard: (
		lsession: string,
		typeCard: core.TypeContract,
		options: {
			timestamp: any;
			reason: any;
			actor: any;
			originator?: any;
			attachEvents: any;
		},
		card: Partial<core.Contract>,
	) => Promise<core.Contract | null>;
	replaceCard: (
		lsession: string,
		typeCard: core.TypeContract,
		options: {
			timestamp: any;
			reason: any;
			actor: any;
			originator?: any;
			attachEvents: any;
		},
		card: Partial<core.Contract>,
	) => Promise<core.Contract | null>;
	patchCard: (
		lsession: string,
		typeCard: core.TypeContract,
		options: {
			timestamp: any;
			reason: any;
			actor: any;
			originator?: any;
			attachEvents: any;
		},
		card: Partial<core.Contract>,
		patch: Operation[],
	) => Promise<core.Contract | null>;
	cards: {
		[slug: string]: core.ContractDefinition<core.ContractData>;
	};
}

export interface Action {
	handler: (
		session: string,
		context: WorkerContext,
		// The full contract of the action target.
		// This is the same contract referenced by the request.card parameter.
		contract: core.Contract<core.ContractData>,
		request: {
			// The full contract of the action being executed.
			action: core.ActionContract;
			// The ID or Slug of the action target
			card: string;
			actor: string;
			context: core.Context;
			timestamp: any;
			epoch: any;
			arguments: { [arg: string]: JSONSchema };
			originator?: string;
		},
	) => any;
	pre: (session: string, context: any, request: any) => any;
}
