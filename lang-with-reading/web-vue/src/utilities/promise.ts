import pMap from 'p-map'
import pAll from 'p-all'

interface PromiseParam {
  (
    resolve: (value?: {} | PromiseLike<{}> | undefined) => void,
    reject: (reason?: any) => void,
  ): void
}

class MyPromiseSet<T> {
  constructor(func: PromiseParam) {
    return new Promise(func)
  }
  static resolve = Promise.resolve
  static reject = Promise.reject
  static map = pMap
  static all = pAll
}

export default MyPromiseSet
export const MPromise = MyPromiseSet
