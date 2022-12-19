// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

const [count, ...arr] = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

const solution = (count, arr) => {
  const maxScore = Math.max(...arr);

  const result = arr.map((score) => {
    return (score / maxScore) * 100;
  });

  const age = result.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(age / count);
};

solution(count, arr);
