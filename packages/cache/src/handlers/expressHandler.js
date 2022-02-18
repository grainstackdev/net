// @flow

import serverless from "serverless-http"
import express from "express"
import registerEndpoints from "../endpoints/registerEndpoints";

const app = express();

app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf
  }
}))

registerEndpoints(app)

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// $FlowFixMe
exports.handler = serverless(app);
