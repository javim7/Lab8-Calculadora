import {cube, square} from './exp'

describe('given a number, return is exponent', () => {
  it('return its squared', () => {
    expect(square(2)).toBe(4)
    expect(square("2")).toBe(4)
    expect(square("a")).toBe(0)
  })
  it('return its cubed', () => {
    expect(cube(2)).toBe(8)
    expect(cube("2")).toBe(8)
  })
})