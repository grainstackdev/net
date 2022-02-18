// @flow

export type GetUploadUrlInput = V1_GetUploadUrlInput
export type GetUploadUrlPayload = V1_GetUploadUrlPayload

/*

Performs permission checks and then prepares a URL.

* */
export default async function getUploadUrl(app: any): Promise<any> {
  app.get('/v1/getUploadUrl', async (req, res, next) => {
    try {
      const payload = await v1_getUploadUrl(req.body)
      return res.status(200).json(payload)
    } catch (err) {
      console.error(err)
      return res.status(400)
    }
  })
}

type V1_GetUploadUrlInput = {

}

type V1_GetUploadUrlPayload = {

}

async function v1_getUploadUrl(input: V1_GetUploadUrlInput): Promise<V1_GetUploadUrlPayload> {
  return {}
}
