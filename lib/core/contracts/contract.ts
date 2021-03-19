/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

/**
 * The base interface that must be implemented by every contract.
 */
export interface Contract {
	/**
	 * A UUID that uniquely identifies this contract.
	 */
	id: string;
	/**
	 * A semantic version of the contract.
	 */
	version: string;
	/**
	 * A string that uniquely identifies this contract.
	 */
	slug: string;
	/**
	 * An optional user-friendly name for this contract.
	 */
	name?: string | null;
	/**
	 * The type of this contract. The type value should include the version.
	 *
	 * For example: 'my-type@1.0.0'
	 */
	type: string;
	/**
	 * The tags associated with this contract.
	 */
	tags: string[];
	/**
	 * Markers associated with this contract.
	 */
	markers: string[];
	/**
	 * Linked contracts, keyed by the 'link verb'.
	 */
	links?: {
		[k: string]: unknown;
	};
	/**
	 * The date/time the contract was created, expressed as an ISO 8601 string.
	 */
	created_at: string;
	/**
	 * The date/time the contract was most recently updated, expressed as an ISO 8601 string.
	 */
	updated_at?: string | null;
	/**
	 * Specifies whether the contract is currently active.
	 */
	active: boolean;
	/**
	 * The data associated with this contract.
	 */
	data: {
		[k: string]: unknown;
	};
	/**
	 * A list of requirements/dependencies for this contract.
	 */
	requires: Array<{
		[k: string]: unknown;
	}>;
	/**
	 * A list of capabilities for this contract.
	 */
	capabilities: Array<{
		[k: string]: unknown;
	}>;
	/**
	 * Link timestamps, keyed by 'link verb'.
	 */
	linked_at?: {
		[k: string]: unknown;
	};
}

/**
 * A summary of a contract, containing just the key fields.
 */
export interface ContractSummary
	extends Pick<Contract, 'id' | 'slug' | 'version' | 'type'> {}

interface OptionalContract extends Partial<Contract> {}

/**
 * Contracts are defined with certain required properties and various other optional properties.
 */
export interface ContractDefinition
	extends Omit<
			OptionalContract,
			'slug' | 'type' | 'links' | 'created_at' | 'updated_at' | 'linked_at'
		>,
		Pick<Contract, 'slug' | 'type'> {}
