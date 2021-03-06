import { Context, ActionRequestContract } from '../core';
import { ExecuteContract } from './contracts';
import { PostResults } from './events';

export type OnMessageEventHandler = (
	payload: ActionRequestContract,
) => Promise<void>;

export interface QueueConsumer {
	initializeWithEventHandler: (
		context: Context,
		onMessageEventHandler: OnMessageEventHandler,
	) => Promise<void>;
	run: (
		context: Context,
		onMessageEventHandler: OnMessageEventHandler,
		retries?: number,
	) => Promise<boolean>;
	cancel: () => Promise<void>;
	postResults: (
		actor: string,
		context: Context,
		actionRequest: ActionRequestContract,
		results: PostResults,
	) => Promise<ExecuteContract>;
}
