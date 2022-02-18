import getDownloadUrl from "./getDownloadUrl";
import getUploadUrl from "./getUploadUrl";
import prepareDownloadUrl from "./prepareDownloadUrl";
import prepareUploadUrl from "./prepareUploadUrl";


export default function registerEndpoints(app) {
  // todo
  //  versioning system needs:
  //  * devs may be on older versions arbitrarily
  //  * sometimes function signature does not change, but internal functionality does. This will not result in version change.
  //  * only changes to signature cause a change, and it is on a per function basis.
  Promise.resolve().then(async () => {
    try {
      await getDownloadUrl(app)
      await getUploadUrl(app)
      await prepareDownloadUrl(app)
      await prepareUploadUrl(app)
    } catch (err) {
      console.error(err)
      // endpoints should catch and handle themselves by calling res.status(400).
    }
  })
}
