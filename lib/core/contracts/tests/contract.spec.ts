/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import pick from 'lodash/pick';
import { Contract, ContractSummary, ContractDefinition } from '../contract';
import repository from './fixtures/repository.json';

describe('Contract', () => {
	test('throws no TypeScript errors', () => {
		const repo: Contract = repository;
		expect(repo.id).toEqual(repository.id);
	});
});

describe('ContractSummary', () => {
	test('throws no TypeScript errors', () => {
		const repoSummary: ContractSummary = pick(
			repository,
			'id',
			'slug',
			'version',
			'type',
		);
		expect(repoSummary.id).toEqual(repository.id);
	});
});

describe('ContractDefinition', () => {
	test('throws no TypeScript errors', () => {
		const repoDefinition: ContractDefinition = pick(
			repository,
			'slug',
			'version',
			'type',
		);
		expect(repoDefinition.slug).toEqual(repository.slug);
	});
});
