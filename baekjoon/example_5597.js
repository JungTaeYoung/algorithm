// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solution = (input) => {
  const numbers = new Array(30).fill(0).map((v, i) => i + 1);
  numbers.forEach((value) => {
    if (input.indexOf(value) == -1) {
      console.log(value);
    }
  });
};

solution(input);
