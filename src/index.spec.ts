import { series } from 'async'
import test = require('tape')
import { AsyncNodeStorage } from './index'

test('should implement the interface', test => {
  let adaptor = new AsyncNodeStorage('../tmp')
  series([
    next => adaptor.setItem('key', 'value', next),
    next => adaptor.getItem('key', (_, value) => {
      test.equal(value, 'value')
      next()
    }),
    next => adaptor.getAllKeys((_, keys) => {
      test.deepEqual(keys, ['key'])
      next()
    }),
    next => adaptor.removeItem('key', next),
    next => adaptor.getAllKeys((_, keys) => {
      test.deepEqual(keys, [])
      next()
    })
  ], test.end)
})
