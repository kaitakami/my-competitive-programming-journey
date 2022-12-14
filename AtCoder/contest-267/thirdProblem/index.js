"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  const [N, M] = readline().split(" ").map(Number);
  const arr = readline().split(" ").map(Number);
  let actualValue = 0;
  let maxValue = 0;
  for (let i = 0; i <= N - M; i++) {
    const subArray = arr.slice(i, i + M);
    for (let i = 0; i < subArray.length; i++) {
      actualValue += subArray[i] * (i + 1);
    }
    if (actualValue > maxValue) {
      maxValue = actualValue;
    }
    actualValue = 0;
  }
  console.log(maxValue);
}
