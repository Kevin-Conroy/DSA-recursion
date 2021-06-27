'use strict';

function fib(num) {
  if (num <= 0) {
    return "number must be positive";
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    return fib(num - 2) + fib(num - 1);
  }
}

console.log(fib(8));
console.log(fib(2));
console.log(fib(1));
console.log(fib(0));
