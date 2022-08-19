// 백준 제출 전용
const readFileSyncAddress = "/dev/stdin";

// 테스트 전용
// const readFileSyncAddress = "../input.txt";

const input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

const solution = (year) => {
  return year - 543;
};

console.log(solution(input));
