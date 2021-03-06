import { Context, ActionRequestContract, ContractData } from '../core';
import { ExecuteContract } from './contracts';

export interface ProducerOptions {
	context: Context;
	action: string;
	card: string;
	type: string;
	arguments: ContractData;
	currentDate?: Date;
	originator?: string;
	schedule?: string;
}

export interface ProducerResults {
	error: boolean;
	timestamp: string;
	data: ExecuteContract['data']['payload']['data'];
}

// TODO: Make getNextExecutionDateTime non-optional after
// merging scheduled action support into jellyfish-queue
export interface QueueProducer {
	initialize: (context: Context) => Promise<void>;
	storeRequest: (
		actor: string,
		session: string,
		options: ProducerOptions,
	) => Promise<ActionRequestContract>;
	enqueue: (
		actor: string,
		session: string,
		options: ProducerOptions,
	) => Promise<ActionRequestContract>;
	waitResults: (
		context: Context,
		actionRequest: ActionRequestContract,
	) => Promise<ProducerResults>;
	getLastExecutionEvent: (
		context: Context,
		originator: string,
	) => Promise<ExecuteContract | null>;
	getNextExecutionDateTime?: (
		context: Context,
		session: string,
		scheduledActionId: string,
	) => Promise<string | null>;
}
