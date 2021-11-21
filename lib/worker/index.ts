export * from './contracts';
import { Operation } from 'fast-json-patch';
import { core } from '../';
import { ProducerOptions } from '../queue';
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
		options?: Parameters<core.JellyfishKernel['query']>[3],
	) => Promise<T[]>;
	privilegedSession: string;
	insertCard: (
		lsession: string,
		typeCard: core.TypeContract,
		options: {
			timestamp?: string | number | Date;
			reason?: string;
			actor?: string;
			originator?: string;
			attachEvents?: boolean;
		},
		card: Partial<core.Contract>,
	) => Promise<core.Contract | null>;
	replaceCard: (
		lsession: string,
		typeCard: core.TypeContract,
		options: {
			timestamp?: string | number | Date;
			reason?: string;
			actor?: string;
			originator?: string;
			attachEvents?: boolean;
		},
		card: Partial<core.Contract>,
	) => Promise<core.Contract | null>;
	patchCard: (
		lsession: string,
		typeCard: core.TypeContract,
		options: {
			timestamp?: string | number | Date;
			reason?: string;
			actor?: string;
			originator?: string;
			attachEvents?: boolean;
		},
		card: Partial<core.Contract>,
		patch: Operation[],
	) => Promise<core.Contract | null>;
	enqueueAction: (
		session: string,
		actionRequest: ProducerOptions,
	) => Promise<core.ActionRequestContract>;
	cards: {
		[slug: string]: core.ContractDefinition<core.ContractData>;
	};
}

// TS-TODO: it's annoying that action-increment-tag returns an array of contract summaries
// whereas all the other actions return either null or a single contract summary. Might be
// better to standardize
export interface Action {
	handler: <TData = core.ContractData>(
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
			arguments: { [k: string]: any };
			originator?: string;
		},
	) => Promise<
		null | core.ContractSummary<TData> | Array<core.ContractSummary<TData>>
	>;

	// Preprocess action arguments before sotring the action in the DB. e.g. Hashing a plaintext password
	// This function returns a (potentially) modified copy of the action arguments
	pre: (
		session: string,
		context: WorkerContext,
		request: {
			// The slug of the action being executed.
			action: string;
			// The ID or Slug of the action target
			card: string;
			type: string;
			context: core.Context;
			arguments: { [k: string]: any };
		},
	) => Promise<any> | any;
}
