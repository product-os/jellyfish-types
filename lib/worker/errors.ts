/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { JellyfishError } from '../error';

export interface WorkerErrors {
	WorkerNoExecuteEvent: JellyfishError;
	WorkerNoElement: JellyfishError;
	WorkerInvalidVersion: JellyfishError;
	WorkerInvalidAction: JellyfishError;
	WorkerInvalidActionRequest: JellyfishError;
	WorkerInvalidTrigger: JellyfishError;
	WorkerInvalidTemplate: JellyfishError;
	WorkerInvalidDuration: JellyfishError;
	WorkerSchemaMismatch: JellyfishError;
	WorkerAuthenticationError: JellyfishError;
}
