// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

// 주사위 세개 문제

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (year) => {
  const count = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < input.length; i++) {
    count[input[i] - 1] += 1;
  }

  if (Math.max(...count) == 1) {
    return Math.max(...input) * 100;
  }
  if (Math.max(...count) == 2) {
    return 1000 + (count.indexOf(Math.max(...count)) + 1) * 100;
  }
  if (Math.max(...count) == 3) {
    return 10000 + (count.indexOf(Math.max(...count)) + 1) * 1000;
  }
};

console.log(solution(input));
