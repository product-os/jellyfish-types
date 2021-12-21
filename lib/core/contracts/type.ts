import { JsonSchema } from '../../json-schema';
import { Contract, ContractDefinition } from './contract';

export interface TypeData {
	schema: JsonSchema;
	uiSchema?: unknown;
	[k: string]: unknown;
}

export interface TypeContract extends Contract<TypeData> {}

export interface TypeContractDefinition extends ContractDefinition<TypeData> {}
