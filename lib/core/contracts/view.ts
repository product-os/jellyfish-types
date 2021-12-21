/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import { Contract, ContractDefinition } from './contract';
import { JsonSchema } from '../../json-schema';

export interface ViewData {
	actor?: string;
	allOf?: {
		name: string;
		schema: JsonSchema;
	}[];
	anyOf?: {
		name: string;
		schema: JsonSchema;
	}[];
	oneOf?: {
		name: string;
		schema: JsonSchema;
	}[];
	/**
	 * A list of data types this view can return
	 */
	types?: string[];
	schema?: JsonSchema;
	namespace?: string;
	[k: string]: unknown;
}

export interface ViewContractDefinition extends ContractDefinition<ViewData> {}

export interface ViewContract extends Contract<ViewData> {}
