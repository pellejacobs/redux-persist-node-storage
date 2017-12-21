import test = require('tape')
import { AsyncNodeStorage } from './index'

let adaptor = new AsyncNodeStorage('../tmp')

test('should implement the interface', t => {
  return adaptor.setItem('key', 'value')
    .then(() => {
      return adaptor.getItem('key')
    })
    .then((value) => {
      t.equal('value', value)

      return adaptor.getAllKeys()
    })
    .then((keys) => {
      t.deepEqual(['key'], keys)

      return adaptor.removeItem('key')
    })
    .then(() => {
      return adaptor.getAllKeys()
    })
    .then((keys) => {
      t.deepEqual([], keys)
      t.end()
    })
    .catch((err) => {
      t.end(err)
    })
})
