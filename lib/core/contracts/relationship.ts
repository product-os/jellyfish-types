import { Contract, ContractDefinition } from './contract';

export type RelationshipData = RelationshipDataGeneric &
	RelationshipDataSpecific;

export type RelationshipDataGeneric = {
	[k: string]: unknown;
};

export interface RelationshipDataSpecific {
	inverseName: string | undefined;
	title: string;
	inverseTitle: string | undefined;
	from: {
		type: string;
	};
	to: {
		type: string;
	};
}

export interface RelationshipContract extends Contract<RelationshipData> {}

export interface RelationshipDefinition
	extends ContractDefinition<RelationshipData> {}
