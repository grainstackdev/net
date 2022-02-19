// @flow

export type GetInput = V1_GetInput
export type GetPayload = V1_GetPayload
import {
  DynamoDBClient,
  BatchExecuteStatementCommand,
} from "@aws-sdk/client-dynamodb"
import config from "common"

/*

Performs permission checks and then prepares a URL.

* */
export default async function get(app: any): Promise<any> {
  app.get("/v1/get", async (req, res, next) => {
    try {
      const payload = await v1_get(req.body)
      return res.status(200).json(payload)
    } catch (err) {
      console.error(err)
      return res.status(400)
    }
  })
}

type V1_GetInput = {}

type V1_GetPayload = {}

async function v1_get(input: V1_GetInput): Promise<V1_GetPayload> {
  const client = new DynamoDBClient({ region: config.region })
  const params = {
    /** input parameters */
  }
  const command = new BatchExecuteStatementCommand(params)

  try {
    // const data = await client.send(command);
    const results = await client.listTables({})
    console.warn(results.TableNames.join("\n"))
  } catch (error) {}

  return {}
}
