// 백준 제출 전용
const path = require("path");
const readFileSyncAddress =
  require("os").platform() === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "../input.txt");

// 달팽이는 올라가고싶다 문제

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));

const solution = (input) => {
  const [A, B, V] = input;
  const day = Math.ceil((V - A) / (A - B)) + 1;
  console.log(day);
};

solution(input);
