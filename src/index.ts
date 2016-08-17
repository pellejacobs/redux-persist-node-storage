import { LocalStorage } from 'node-localstorage'

export class AsyncNodeStorage {
  private localStorage: LocalStorage

  constructor(storageDirectory: string) {
    this.localStorage = new LocalStorage(storageDirectory)
  }

  getItem (key: string, cb: (error: Error, result?: string) => void) {
    try {
      const storedValue = this.localStorage.getItem(key)
      process.nextTick(() => cb(null, storedValue))
    } catch (e) {
      cb(e)
    }
  }

  setItem (key: string, value: string | number, cb: (error: Error) => void) {
    try {
      this.localStorage.setItem(key, value)
      process.nextTick(() => cb(null))
    } catch (e) {
      cb(e)
    }
  }

  removeItem (key: string, cb: (error: Error) => void) {
    try {
      this.localStorage.removeItem(key)
      process.nextTick(() => cb(null))
    } catch (e) {
      cb(e)
    }
  }

  getAllKeys (cb: (error: Error, keys?: string[]) => void) {
    try {
      let keys = []
      for (let i = 0; i < this.localStorage.length; i++) {
        keys.push(this.localStorage.key(i))
      }
      process.nextTick(() => cb(null, keys))
    } catch (e) {
      cb(e)
    }
  }
}
