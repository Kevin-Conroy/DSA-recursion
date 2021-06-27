'use strict';

function countSheep(numOfSheep) {
  //countdown to "0" as base case
  if (numOfSheep === 0) {
    console.log(`All the sheep have jumped over the fence!`);
    return;
  }

  console.log(`${numOfSheep}: Another sheep jumped over the fence!`);
  //pass numOfSheep minus 1 to recursive case.
  numOfSheep -= 1;
  countSheep(numOfSheep);
}

countSheep(3);