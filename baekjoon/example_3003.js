// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

// 테스트 전용
// const readFileSyncAddress = "../input.txt";

// 킹, 퀸, 룩, 비숍, 나이트, 폰 문제

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(" ");

const whiteMaxUint = [1, 1, 2, 2, 2, 8];

const solution = (year) => {
  let returnText = "";
  for (let i = 0; i < whiteMaxUint.length; i++) {
    returnText +=
      whiteMaxUint.length - 1 === i
        ? whiteMaxUint[i] - input[i]
        : `${whiteMaxUint[i] - input[i]} `;
  }
  return returnText;
};

console.log(solution(input));
