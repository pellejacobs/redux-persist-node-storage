# Redux persist node storage 

[![Travis branch](https://img.shields.io/travis/pellejacobs/redux-persist-node-storage/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/pellejacobs/redux-persist-node-storage)
[![npm version](https://img.shields.io/npm/v/redux-persist-node-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-node-storage)
[![npm downloads](https://img.shields.io/npm/dt/redux-persist-node-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-node-storage)


Storage adaptor to use [node-localstorage](https://github.com/lmaccherone/node-localstorage) with [redux-persist](https://github.com/rt2zz/redux-persist), by implementing the needed methods: `setItem`, `getItem`, `removeItem` and `getAllKeys`

## install
Simply run: 

```bash
npm install --save redux-persist-node-storage
```

## usage 
```javascript
import { AsyncNodeStorage } from 'redux-persist-node-storage'
import { persistStore, autoRehydrate } from 'redux-persist'
const store = createStore(reducer, undefined, autoRehydrate())
persistStore(store, { storage: new AsyncNodeStorage('/tmp/storageDir') })
``` 
