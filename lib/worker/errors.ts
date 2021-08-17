/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { JellyfishErrorConstructor } from '../error';

export interface WorkerErrors {
	WorkerNoExecuteEvent: JellyfishErrorConstructor;
	WorkerNoElement: JellyfishErrorConstructor;
	WorkerInvalidVersion: JellyfishErrorConstructor;
	WorkerInvalidAction: JellyfishErrorConstructor;
	WorkerInvalidActionRequest: JellyfishErrorConstructor;
	WorkerInvalidTrigger: JellyfishErrorConstructor;
	WorkerInvalidTemplate: JellyfishErrorConstructor;
	WorkerInvalidDuration: JellyfishErrorConstructor;
	WorkerSchemaMismatch: JellyfishErrorConstructor;
	WorkerAuthenticationError: JellyfishErrorConstructor;
}
