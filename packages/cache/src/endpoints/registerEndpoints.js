// @flow

import get from "./get";
import set from "./set";

export default function registerEndpoints(app: any): any {
  // todo
  //  versioning system needs:
  //  * devs may be on older versions arbitrarily
  //  * sometimes function signature does not change, but internal functionality does. This will not result in version change.
  //  * only changes to signature cause a change, and it is on a per function basis.
  Promise.resolve().then(async () => {
    try {
      await get(app)
      await set(app)
    } catch (err) {
      console.error(err)
      // endpoints should catch and handle themselves by calling res.status(400).
    }
  })
}
