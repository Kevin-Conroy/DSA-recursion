'use strict';

function reverseStr(str) {
  //if string is empty, return ''
  if (str.length === 0) {
    return '';
  }

  //recusion: grabs end of string, pass rest of string to recursion.
  let newString = str[str.length - 1];

  return newString + reverseStr(str.slice(0, str.length - 1)); //c + ab
}

console.log(reverseStr('hello, world'));