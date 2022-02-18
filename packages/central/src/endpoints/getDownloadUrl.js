// @flow

export type GetDownloadUrlInput = V1_GetDownloadUrlInput
export type GetDownloadUrlPayload = V1_GetDownloadUrlPayload

/*

Performs permission checks and then prepares a URL.

* */
export default async function getDownloadUrl(app: any): Promise<any> {
  app.get('/v1/getDownloadUrl', async (req, res, next) => {
    try {
      const payload = await v1_getDownloadUrl(req.body)
      return res.status(200).json(payload)
    } catch (err) {
      console.error(err)
      return res.status(400)
    }
  })
}

type V1_GetDownloadUrlInput = {

}

type V1_GetDownloadUrlPayload = {

}

async function v1_getDownloadUrl(input: V1_GetDownloadUrlInput): Promise<V1_GetDownloadUrlPayload> {
  return {}
}
