/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { Context, ActionRequestContract } from '../core';
import { ExecuteContract } from './contracts';
import { PostResults } from './events';

export interface ActionPayload {
	slug: string;
	data: {
		originator: string;
		timestamp: string;
		action: string;
		actor?: string;
	};
}

export type OnMessageEventHandler = (payload: ActionPayload) => Promise<void>;

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
