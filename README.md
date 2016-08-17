# Redux persist node storage

Storage adaptor to use [node-localstorage](https://github.com/lmaccherone/node-localstorage) with [redux-persist](https://github.com/lmaccherone/node-localstorage), by implementing the needed methods: setItem, getItem, removeItem and getAllKeys

## install 
```
npm install --save redux-persist-node-storage
```

## usage 

```
import asyncNodeStorage from 'redux-persist-node-storage'
import {persistStore, autoRehydrate} from 'redux-persist'
const store = createStore(reducer, undefined, autoRehydrate({ storage: new asyncNodeStorage('/tmp/storageDir') }))
persistStore(store)
``` 
