# Jellyfish Types

This library contains TypeScript type and interface definitions used throughout Jellyfish.

# Usage

Below is an example how to use this library:

```typescript
import { JSONSchema } from '@balena/jellyfish-types';

const mySchema: JSONSchema = { ... }
```

# Commands

## gen-card-types

Jellyfish plugins that implement cards can use this command to generate typings for their cards.

Generate typings during the `lint` stage, so they are available at build time.

In the plugin `package.json` add a `types` scripts:

	"types": "npx gen-card-types <path-to-cards-dir>/index.ts && balena-lint --fix <path-to-cards-dir>/types.ts"

Add `npm run types` to the `lint` script:

	"lint": "balena-lint ... && npm run types",


# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-types/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-types/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-types
