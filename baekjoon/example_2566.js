// 백준 제출 전용
const path = require("path");
const readFileSyncAddress =
  require("os").platform() === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "../input.txt");

// 최대값 찾기 문제

const rows = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");
const input = rows.map((row) => row.split(" ").map((num) => parseInt(num)));

const solution = (input) => {
  let max = -1;
  let x = 0;
  let y = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] > max) {
        max = input[i][j];
        x = i + 1;
        y = j + 1;
      }
    }
  }

  console.log(max);
  console.log(x, y);
};

solution(input);
