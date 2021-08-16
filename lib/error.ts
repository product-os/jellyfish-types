/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

/**
 * The interface that all Jellyfish Error classes should
 * implement.
 */
export interface JellyfishError extends Error {
	/**
	 * True if the error could be expected in normal circumstances.
	 *
	 * i.e. if expected is true, this error isn't a result of a bug
	 * or an out-of-memory or segmentation-fault error etc.
	 */
	expected: boolean;
}

export interface JellyfishErrorConstructor {
	new (message?: string): JellyfishError;
	(message?: string): JellyfishError;
	readonly prototype: JellyfishError;
}

export declare var JellyfishError: JellyfishErrorConstructor;
