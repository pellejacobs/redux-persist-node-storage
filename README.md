# Redux persist node storage 

[![Build Status](https://travis-ci.org/pellejacobs/redux-persist-node-storage.svg?branch=master)](https://travis-ci.org/pellejacobs/redux-persist-node-storage)
[![npm version](https://img.shields.io/npm/v/redux-persist-node-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-node-storage)

Storage adaptor to use [node-localstorage](https://github.com/lmaccherone/node-localstorage) with [redux-persist](https://github.com/lmaccherone/node-localstorage), by implementing the needed methods: `setItem`, `getItem`, `removeItem` and `getAllKeys`

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
