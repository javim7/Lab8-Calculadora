const square = (a) => isNaN(parseInt(a,10)) ? 0: a * a

const cube = (a) => a * a * a

const add = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

export {cube, square, add, subtract, multiply, divide}