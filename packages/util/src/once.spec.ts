import { ok, equal } from 'assert'

import { once } from './once'

it('测试 once 仅被执行一次', () => {
  let count = 0

  const run = once(function test() {
    count++
    equal(count, 1)
  })

  ok(typeof run === 'function')

  run()
  run()
})
