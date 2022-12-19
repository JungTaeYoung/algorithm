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
  const result = input.map((num) => {
    return num % 42;
  });
  const uniqArr = [...new Set(result)];
  console.log(uniqArr.length);
};

solution(input);
