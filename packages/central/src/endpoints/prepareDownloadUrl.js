// @flow

export type PrepareDownloadUrlInput = V1_PrepareDownloadUrlInput
export type PrepareDownloadUrlPayload = V1_PrepareDownloadUrlPayload

/*

Performs permission checks and then prepares a URL.

* */
export default async function prepareDownloadUrl(app: any): Promise<any> {
  app.get('/v1/prepareDownloadUrl', async (req, res, next) => {
    try {
      const payload = await v1_prepareDownloadUrl(req.body)
      return res.status(200).json(payload)
    } catch (err) {
      console.error(err)
      return res.status(400)
    }
  })
}

type V1_PrepareDownloadUrlInput = {

}

type V1_PrepareDownloadUrlPayload = {

}

async function v1_prepareDownloadUrl(input: V1_PrepareDownloadUrlInput): Promise<V1_PrepareDownloadUrlPayload> {
  return {}
}
