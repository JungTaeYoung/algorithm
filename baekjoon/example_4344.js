// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

const [count, ...arr] = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const solution = (arr) => {
  arr.forEach((list) => {
    const [count, ...scores] = list.split(" ").map((v) => +v);
    const age =
      scores.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / count;

    const overAge =
      (scores.filter((score) => score > age).length / count) * 100;
    console.log(`${overAge.toFixed(3)}%`);
  });
};

solution(arr);
