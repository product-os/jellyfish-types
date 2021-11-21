/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import { Contract, ContractDefinition } from './contract';
import { JSONSchema } from '../../json-schema';

export interface ViewData {
	actor?: string;
	allOf?: {
		name: string;
		schema: JSONSchema;
	}[];
	anyOf?: {
		name: string;
		schema: JSONSchema;
	}[];
	oneOf?: {
		name: string;
		schema: JSONSchema;
	}[];
	/**
	 * A list of data types this view can return
	 */
	types?: string[];
	schema?: JSONSchema;
	namespace?: string;
	[k: string]: unknown;
}

export interface ViewContractDefinition extends ContractDefinition<ViewData> {}

export interface ViewContract extends Contract<ViewData> {}
