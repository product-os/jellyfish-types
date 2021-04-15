/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { JellyfishError } from '../error';

export interface CoreErrors {
	JellyfishDatabaseError: JellyfishError;
	JellyfishDatabaseTimeoutError: JellyfishError;
	JellyfishCacheError: JellyfishError;
	JellyfishInvalidSlug: JellyfishError;
	JellyfishInvalidId: JellyfishError;
	JellyfishInvalidVersion: JellyfishError;
	JellyfishInvalidSchema: JellyfishError;
	JellyfishInvalidPatch: JellyfishError;
	JellyfishInvalidLimit: JellyfishError;
	JellyfishInvalidRegularExpression: JellyfishError;
	JellyfishInvalidSession: JellyfishError;
	JellyfishElementAlreadyExists: JellyfishError;
	JellyfishNoIdentifier: JellyfishError;
	JellyfishAuthenticationError: JellyfishError;
	JellyfishInvalidEnvironmentVariable: JellyfishError;
	JellyfishInvalidExpression: JellyfishError;
	JellyfishNoAction: JellyfishError;
	JellyfishNoElement: JellyfishError;
	JellyfishNoView: JellyfishError;
	JellyfishPermissionsError: JellyfishError;
	JellyfishSchemaMismatch: JellyfishError;
	JellyfishSessionExpired: JellyfishError;
	JellyfishUnknownCardType: JellyfishError;
}
