/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

export * as core from './core';

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
