/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const fs = require('fs')
const path = require('path')
const { compile } = require('json-schema-to-typescript')
const { sortBy, get, filter, identity } = require('lodash')
const { getSdk } = require('@balena/jellyfish-client-sdk')

// HACK: Arguments are: authToken [apiUrl] [outputDir]
// TODO: Use yargs or similar to tidy up this script!
const args = process.argv.slice(2)
const authToken = args[0]
const apiUrl = args.length > 1 ? args[1] : 'https://api.ly.fish'
const outputDir = args.length > 2 ? args[2] : path.resolve(__dirname, '../lib/types/contracts')

const bannerComment = `/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *
 * This file was automatically generated by 'npm run types'.
 *
 * DO NOT MODIFY IT BY HAND!
 */

`;

const typeInterfacePrefix = `

// tslint:disable: array-type

import { core } from '@balena/jellyfish-types';

`;

/**
 * Generates TypeScript interface definition files for any type contracts in the given list of contracts.
 * The generated files will be written to the outputDir directory, which will be deleted and re-created
 * as part of this function's actions.
 *
 * @param outputDir - the output directory into which interface definition files should be written
 * @param contracts - a list of contracts. An interface definition file will be generated for every
 *                    _type_ contract.
 */
export async function generateContractInterfaces(
	outputDir,
	contracts,
) {
	// (Re)create output directory
	try {
		await fs.promises.rmdir(outputDir, {
			recursive: true,
		});
		await fs.promises.mkdir(outputDir);
	} catch (err) {
		if (err.name !== 'ENOENT') {
			throw err;
		}
	}

	let indexContent = bannerComment;

	const sortedContracts = sortBy(contracts, 'slug');

	// Generate files
	const results = await Promise.all(
		sortedContracts
			.filter((contract) => {
				return contract.type === 'type@1.0.0';
			})
			.map(async (contract) => {
				// Not sure if we need to worry about anything other than "data".
				// Maybe include other fields whose definition differs from base Contract.
				const schema = get(contract, [ 'data', 'schema', 'properties', 'data' ], {})
				schema.title = `${contract.slug}-data`;

				let compiled = null;

				try {
					compiled = await compile(schema, contract.slug, {
						ignoreMinAndMaxItems: true,
						style: {
							bracketSpacing: true,
							printWidth: 120,
							semi: true,
							singleQuote: true,
							tabWidth: 2,
							trailingComma: 'all',
							useTabs: true,
						},
						bannerComment: bannerComment + typeInterfacePrefix,
					});
				} catch(error) {
					console.log(`Could not create interface for ${contract.slug}`)
					return false
				}
				console.log(`Generated contract interface for ${contract.slug}`)

				const contractName = compiled.match(/interface ([a-zA-Z]+)Data/)[1];

				// Add definitions for the contract and contract defintion
				compiled += `
export interface ${contractName}ContractDefinition
	extends core.ContractDefinition<${contractName}Data> {}

export interface ${contractName}Contract
	extends core.Contract<${contractName}Data> {}
`;

				// Output file to local path
				await fs.promises.writeFile(
					path.join(outputDir, `${contract.slug}.ts`),
					compiled,
				);

				// Add an export to the index file
				indexContent += `export * from './${contract.slug}';\n`;

				return true
			}),
	);

	fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
	return results
}

// Connect to the Jellyfish SDK
const jfSdk = getSdk({
	apiUrl,
	apiPrefix: 'api/v2/',
	authToken,
});

async function generateAllContractInterfaces(sdk) {
	// Fetch all types
	const types = await sdk.card.getAllByType('type')
	// Generate contract interfaces for each type
	const results = await generateContractInterfaces(outputDir, types)
	const succeeded = filter(results, identity)
	console.log(`Generated ${succeeded.length} contract interfaces (${results.length - succeeded.length} failed)`)
}

generateAllContractInterfaces(jfSdk)
