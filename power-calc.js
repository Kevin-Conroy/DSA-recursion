'use strict';

function powerCalculator(base, exp) {
  if (exp < 0) {
    return 'Exponent should be >= 0';
  }

  if (exp === 1) {
    return base;
  }
  
  return base * powerCalculator(base, exp-1);
}

console.log(powerCalculator(10, 4));
console.log(powerCalculator(10, 7));