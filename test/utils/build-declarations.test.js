import assert from 'assert'
import {
  default as buildDeclarations,
  buildSingleDeclaration,
  isArray
} from '../../lib/utils/build-declarations'

describe('buildDeclarations function', () => {
  it('should return a string with the css declarations', () => {
    const actual = buildDeclarations({
      borderRadius: '2px',
      display: 'block',
      width: '100%'
    })
    const expected = 'border-radius:2px;display:block;width:100%;'
    assert.strictEqual(actual, expected)
  })

  it('should handle vendor prefixes generated by css-prefix', () => {
    const actual = buildDeclarations({
      display: ['-webkit-flex', 'flex']
    })
    const expected = 'display:-webkit-flex;display:flex;'
    assert.strictEqual(actual, expected)
  })

  it('should return a valid css rule', () => {
    const actual = buildSingleDeclaration('borderRadius', '20px')
    const expected = 'border-radius:20px;'

    assert.strictEqual(actual, expected)
  })
})

describe('isArray function', () => {
  it('should return true', () => {
    assert(isArray([]))
  })

  it('should return false', () => {
    assert(!isArray({}))
    assert(!isArray(''))
    assert(!isArray(12))
  })
})
