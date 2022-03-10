# subspace

packages:

- [aws-host](packages/aws-host/README.md) - Installing this to your account allows you to host from your own AWS account.
- [cache](packages/cache/README.md) - An internal tool. A cheap alternative to memcached.
- [central](packages/central/README.md) - A centralized core.
- [dev](packages/dev/README.md) - Developer API
- [web](./web/README.md) - Web interface to the core.

# How to setup monorepo:

1. Run `yarn -v` to verify you are on yarn version 1.
2. Run `yarn`.

### npm link
This project uses yarn v1 and `npm link`. It does not use workspaces, lerna or any other monorepo tools.

`npm link` is used to allow one package to depend on another package.

- Go into `packages/common` and run `npm link`.
- Go into `packages/cache` and run `npm link common`.

Since we use `npm link`, all packages should be deployed at the same time.

# How to make a new package:

1. Copy dot files from `common`.
2. Run `yarn add --dev @babel/preset-flow @babel/preset-env @babel/plugin-transform-runtime @babel/cli @babel/core @babel/node @babel/eslint-parser flow-bin prettier eslint eslint-plugin-import`.
