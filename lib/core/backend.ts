/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { TransactionMode } from 'pg-promise';

import { Cache } from './cache';
import { CoreErrors } from './errors';
import { Context } from './context';
import { Contract, ContractDefinition } from './contracts';
import { JSONSchema } from '../json-schema';

export interface StreamChange {
	id: string;
	contractType: string;
	type: 'update' | 'insert' | 'delete' | 'unmatch';
	after?: Contract;
}

export interface QuerySelect {
	[key: string]: any;
}

export interface LinksMap {
	// TS-TODO: Figure out the structure of the link items
	[key: string]: any;
}

export interface QueryOptions {
	limit?: number;
	skip?: number;
	sortBy?: string | string[];
	sortDir?: 'asc' | 'desc';
	profile?: boolean;
	links?: LinksMap;
	connection?: any;
}

export type Connection = any;

export interface BackendStatus {
	streams: {
		attachedCount: number;
	};
}

export interface BackendOptions {
	connection?: Connection;
	replace?: boolean;
	skipCache?: boolean;
}

export interface TransactionOptions {
	tag?: string;
	mode?: TransactionMode;
}

export type StreamQuery<TContract extends Contract> = (
	id: string,
) => Promise<TContract[]>;

export interface StreamPayload {
	id: string;
	slug: string;
	type: string;
	cardType: string;
}

export interface Stream extends NodeJS.EventEmitter {
	query: <TContract extends Contract>(
		select: QuerySelect,
		schema: JSONSchema,
		options: any,
	) => Promise<TContract[]>;
	setSchema: (select: QuerySelect, schema: JSONSchema, options: any) => void;
	push: (payload: StreamPayload) => Promise<void>;
	tryEmitEvent: (payload: StreamPayload) => Promise<boolean>;
	close: () => void;
}

export interface Backend {
	cache: Cache;
	errors: CoreErrors;
	connection: Connection;
	connect: (context: Context) => Promise<boolean>;
	disconnect: (context: Context) => Promise<void>;
	drop: (context: Context) => Promise<void>;
	reset: (context: Context) => Promise<void>;
	insertElement: <TContract extends Contract>(
		context: Context,
		object: ContractDefinition,
	) => Promise<TContract>;
	upsertElement: <TContract extends Contract>(
		context: Context,
		object: ContractDefinition,
		options?: BackendOptions,
	) => Promise<TContract>;
	withTransaction: <TResult>(
		callback: (transaction: any) => Promise<TResult>,
		options: TransactionOptions,
	) => Promise<TResult>;
	withSerializableTransaction: <TResult>(
		context: Context,
		callback: (transaction: any) => Promise<TResult>,
		options: TransactionOptions,
	) => Promise<TResult>;
	getElementById: <TContract extends Contract>(
		context: Context,
		id: string,
	) => Promise<TContract>;
	getElementBySlug: <TContract extends Contract>(
		context: Context,
		slug: string,
		options: BackendOptions,
	) => Promise<TContract>;
	getElementsById: <TContract extends Contract>(
		context: Context,
		ids: string[],
	) => Promise<TContract[]>;
	query: <TContract extends Contract>(
		context: Context,
		select: QuerySelect,
		schema: JSONSchema,
		options: QueryOptions,
	) => Promise<TContract[]>;
	prepareQueryForStream: <TContract extends Contract>(
		context: string,
		name: string,
		select: QuerySelect,
		schema: JSONSchema,
		options: QueryOptions,
	) => StreamQuery<TContract>;
	stream: (
		context: Context,
		select: QuerySelect,
		schema: JSONSchema,
		options: QueryOptions,
	) => Promise<Stream>;
	getStatus: () => Promise<BackendStatus>;
	createTypeIndex: (
		context: Context,
		fields: string[],
		type: string,
	) => Promise<void>;
	createFullTextSearchIndex: (
		context: Context,
		type: string,
		fields: string[],
	) => Promise<void>;
}
