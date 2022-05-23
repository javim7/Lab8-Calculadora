/* eslint-disable no-restricted-globals */
const add = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a + b)

const subtract = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a - b)

const multiply = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a * b)

const divide = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a / b)

const modules = (a, b) => (isNaN(parseInt(a, 10)) ? 0 : a % b)

export {
  add, subtract, multiply, divide, modules,
}
