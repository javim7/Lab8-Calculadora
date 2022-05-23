/* eslint-disable no-undef */
import {
  add, subtract, multiply, divide, modules,
} from './aritmeticos'

describe('given a number, return is exponent', () => {
  it('return its addition', () => {
    expect(add(2, 5)).toBe(7)
  })
  it('return its subtraction', () => {
    expect(subtract(7, 5)).toBe(2)
  })
  it('return its multiplication', () => {
    expect(multiply(2, 5)).toBe(10)
    expect(multiply('2', '5')).toBe(10)
  })
  it('return its division', () => {
    expect(divide(6, 2)).toBe(3)
    expect(divide('6', '2')).toBe(3)
  })
  it('return its module', () => {
    expect(modules(5, 2)).toBe(1)
    expect(modules('5', '2')).toBe(1)
  })
})
