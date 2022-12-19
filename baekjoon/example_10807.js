// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

const [count, arr, target] = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const solution = (arr, targetNum) => {
  let inCount = 0;
  const list = arr
    .trim()
    .split(" ")
    .map((v) => +v);
  list.forEach((num) => {
    if (num === +targetNum) {
      inCount += 1;
    }
  });
  return inCount;
};

console.log(solution(arr, target));
