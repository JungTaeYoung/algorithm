// 백준 제출 전용
const readFileSyncAddress = "/dev/stdin";

// 테스트 전용
// const readFileSyncAddress = "../input.txt";

const input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

const solution = (email) => {
  return `${email}??!`;
};

console.log(solution(input));
