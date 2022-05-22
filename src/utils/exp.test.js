import {cube, square, add, subtract, multiply, divide} from './exp'

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
   it('return its addition', () => {
    expect(add(2, 5)).toBe(7)
    expect(add("2", "5")).toBe(7)
   })
   it('return its subtraction', () => {
    expect(subtract(7, 5)).toBe(2)
    expect(subtract("7", "5")).toBe(2)
   })
   it('return its multiplication', () => {
    expect(multiply(2, 5)).toBe(10)
    expect(multiply("2", "5")).toBe(10)
   })
   it('return its division', () => {
     expect(divide(6, 2)).toBe(3)
    expect(divide("6", "2")).toBe(3)
  })
})