# Redux persist node storage

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
