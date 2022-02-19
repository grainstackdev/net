// @flow

// This file must be commonjs w/ flow.
// Do not use import/export syntax or else consumers of this module will not receive any flow coverage for index.js.

import type { Config } from "./config"
const config: Config = require("./config").default

module.exports = {
  config: config,
}
