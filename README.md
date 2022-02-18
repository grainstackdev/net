# subspace

packages:

- [aws-host](packages/aws-host/README.md) - Installing this to your account allows you to host from your own AWS account.
- [cache](packages/cache/README.md) - An internal tool. A cheap alternative to memcached.
- [central](packages/central/README.md) - A centralized core.
- [dev](packages/dev/README.md) - Developer API
- [web](./web/README.md) - Web interface to the core.

# How to make a new package:

1. Copy dot files from `common`.
2. Run `yarn add --dev @babel/preset-flow @babel/preset-env @babel/plugin-transform-runtime @babel/cli @babel/core @babel/node @babel/eslint-parser flow-bin prettier eslint eslint-plugin-import`.
