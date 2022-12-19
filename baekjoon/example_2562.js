// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let maxNumber = 0;
  let maxPos = 0;
  for (let i = 0; i < 9; i++) {
    if (maxNumber < input[i]) {
      maxNumber = input[i];
      maxPos = i + 1;
    }
  }
  console.log(+maxNumber);
  console.log(maxPos);
};

solution(input.map((i) => +i));
