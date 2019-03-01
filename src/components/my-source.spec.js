import {add} from './my-source'
describe('smoke', () => {
  test('add', () => {
    const result = add(1,1)
    expect(result).toBe(2)
  })
})
