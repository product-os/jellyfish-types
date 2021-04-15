/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { JellyfishError } from '../index';

export interface QueueErrors {
	QueueNoRequest: JellyfishError;
	QueueServiceError: JellyfishError;
	QueueInvalidRequest: JellyfishError;
	QueueInvalidAction: JellyfishError;
	QueueInvalidSession: JellyfishError;
}
