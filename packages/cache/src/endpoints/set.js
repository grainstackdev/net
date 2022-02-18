// @flow

export type SetInput = V1_SetInput
export type SetPayload = V1_SetPayload

/*

Performs permission checks and then prepares a URL.

* */
export default async function set(app: any): Promise<any> {
  app.get('/v1/set', async (req, res, next) => {
    try {
      const payload = await v1_set(req.body)
      return res.status(200).json(payload)
    } catch (err) {
      console.error(err)
      return res.status(400)
    }
  })
}

type V1_SetInput = {

}

type V1_SetPayload = {

}

async function v1_set(input: V1_SetInput): Promise<V1_SetPayload> {
  return {}
}
