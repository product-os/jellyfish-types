/*
 * This file was automatically generated.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import { Contract, ContractDefinition } from './contract';

export interface BaseOauthProviderData {
	authorizeUrl: string;
	tokenUrl: string;
	redirectUrl?: string;
	clientSecret: string;
	[k: string]: unknown;
}

export interface WhoAmIOauthProviderData extends BaseOauthProviderData {
	whoamiUrl: string;
	whoamiFieldMap: {
		username: string;
		email?: string;
		firstname?: string;
		lastname?: string;
	};
}

export type OauthProviderData = BaseOauthProviderData | WhoAmIOauthProviderData;

export interface OauthProviderContractDefinition
	extends ContractDefinition<OauthProviderData> {}

export interface OauthProviderContract extends Contract<OauthProviderData> {}
