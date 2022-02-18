// @flow

export type PrepareUploadUrlInput = V1_PrepareUploadUrlInput
export type PrepareUploadUrlPayload = V1_PrepareUploadUrlPayload

/*

Performs permission checks and then prepares a URL.

* */
export default async function prepareUploadUrl(app: any): Promise<any> {
  app.get('/v1/prepareUploadUrl', async (req, res, next) => {
    try {
      const payload = await v1_prepareUploadUrl(req.body)
      return res.status(200).json(payload)
    } catch (err) {
      console.error(err)
      return res.status(400)
    }
  })
}

type V1_PrepareUploadUrlInput = {

}

type V1_PrepareUploadUrlPayload = {

}

async function v1_prepareUploadUrl(input: V1_PrepareUploadUrlInput): Promise<V1_PrepareUploadUrlPayload> {
  return {}
}
