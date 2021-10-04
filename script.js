"use strict";

window.addEventListener("DOMContentLoaded", start);

const baseArray = [0];
let counterArray;

function start() {
  console.log(baseArray);
  counterArray = baseArray[0];
  baseArray.unshift(counterArray + 1);
  if (baseArray.length > 9) {
    baseArray.pop();
  }
  setTimeout(start, 1000);
}
