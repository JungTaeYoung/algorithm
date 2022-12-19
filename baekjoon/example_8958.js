// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

const [count, ...arr] = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const solution = (count, arr) => {
  arr.forEach((caseText) => {
    const textArr = caseText.trim().split("");
    let acc = 0;
    let plusNum = 0;
    textArr.forEach((text) => {
      if (text === "O") {
        plusNum += 1;
      } else {
        plusNum = 0;
      }
      acc += plusNum;
    });
    console.log(acc);
  });
};

solution(count, arr);
