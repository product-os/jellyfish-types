import { Operation } from 'fast-json-patch';
import { JsonSchema } from '../json-schema';
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
	insertCard: <T extends Contract = Contract>(
		context: Context,
		session: string,
		object: Partial<T> & Pick<T, 'type'>,
	) => Promise<T>;
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
		schema: JsonSchema,
		options?: QueryOptions,
	) => Promise<TContract[]>;
	stream: (
		context: Context,
		session: string,
		schema: JsonSchema,
	) => Promise<Stream>;
	defaults: <TContract extends Contract>(
		contract: Partial<TContract>,
	) => TContract;
	getStatus: () => Promise<KernelStatus>;
}
