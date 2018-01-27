import equalByKeys from './'

it('compares objects equality only for the given keys', () => {
  const a = {
    foo: 'you',
    bar: 'today',
    baz: 'meadow',
  }
  const b = {
    foo: 'you',
    bar: 'tomorrow',
    baz: 'meadow',
  }
  expect(equalByKeys(a, b, 'foo', 'baz')).toBe(true)
  b.foo = 'different'
  expect(equalByKeys(a, b, 'foo', 'baz')).toBe(false)
})

it('returns true when no keys are passed', () => {
  const a = {}
  const b = { foo: 'bar' }
  expect(equalByKeys(a, b)).toBe(true)
})

it('returns false when one of the objects is missing a key being compared on', () => {
  const a = {
    foo: 'bar',
  }
  const b = {}
  expect(equalByKeys(a, b, 'foo')).toBe(false)
})
