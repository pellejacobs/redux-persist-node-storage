export class AsyncNodeStorage {
  private localStorage;
  constructor(storageDirectory: string);
  getItem(key: string, cb: (error: Error, result?: string) => void): void;
  setItem(key: string, value: string | number, cb: (error: Error) => void): void;
  removeItem(key: string, cb: (error: Error) => void): void;
  getAllKeys(cb: (error: Error, keys?: string[]) => void): void;
}
