/*
const sum = require('./sum');
var result = sum(1, 3);
console.log("sum result : ", result);
*/

const sumModule = require('./sum');
var result = sumModule.sum(10, 2);
console.log("sum result : ", result);

const calculate = require('./calculator_level1');
var result = calculate.add(10, 2, 3);
console.log("add result : ",result);

var result = calculate.subtract(10, 2);
console.log("subtract result : ",result);

var result = calculate.multiply(10, 2);
console.log("multiply result : ",result);

var result = calculate.divide(20, 2, 5);
console.log("divide result : ",result);