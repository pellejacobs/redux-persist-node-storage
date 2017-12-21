export class AsyncNodeStorage {
  private localStorage;
  constructor(storageDirectory: string);
  getItem(key: string): Promise<string>;
  setItem(key: string, value: string | number): Promise<void>;
  removeItem(key: string): Promise<void>;
  getAllKeys(): Promise<string[]>;
}
