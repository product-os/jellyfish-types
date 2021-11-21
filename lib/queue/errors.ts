import { JellyfishError } from '../index';

export interface QueueErrors {
	QueueNoRequest: JellyfishError;
	QueueServiceError: JellyfishError;
	QueueInvalidRequest: JellyfishError;
	QueueInvalidAction: JellyfishError;
	QueueInvalidSession: JellyfishError;
}
