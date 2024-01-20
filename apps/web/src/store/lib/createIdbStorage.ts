import { del, get, set } from 'idb-keyval';
import type { StorageValue } from 'zustand/middleware';

import idbReplacer from './idbReplacer';
import idbReviver from './idbReviver';

const createIdbStorage = (): {
  getItem: <T>(name: string) => Promise<StorageValue<T>>;
  removeItem: (name: string) => Promise<void>;
  setItem: <T>(name: string, value: StorageValue<T>) => Promise<void>;
} => {
  return {
    getItem: async <T>(name: string): Promise<StorageValue<T>> => {
      const storedValue: string = await get(name) ?? '{}';

      return JSON.parse(storedValue, idbReviver) as StorageValue<T>;
    },
    removeItem: async (name: string): Promise<void> => {
      await del(name);
    },
    setItem: async <T>(name: string, value: StorageValue<T>): Promise<void> => {
      const str = JSON.stringify({ state: { ...value.state } }, idbReplacer);
      await set(name, str);
    }
  };
};

export default createIdbStorage;
