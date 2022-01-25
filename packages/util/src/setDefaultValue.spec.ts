import { ok, deepStrictEqual } from 'assert'

import { setDefaultValue } from './setDefaultValue'

describe('setDefaultValue', () => {
  it('测试默认参数设置', () => {
    const obj = {}

    ok(setDefaultValue(obj, 'foo', 'bar') === 'bar')
    deepStrictEqual(obj, { foo: 'bar' })
  })

  it('测试假值写入', () => {
    const obj = {}

    ok(setDefaultValue(obj, 'test', false) === false)
    ok(setDefaultValue(obj, 'test1', null) === null)
    ok(setDefaultValue(obj, 'test2', undefined) === undefined)
    deepStrictEqual(obj, { test: false, test1: null, test2: undefined })
  })
})
