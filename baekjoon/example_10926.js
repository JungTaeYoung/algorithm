const readFileSyncAddress = "/dev/stdin";
// const readFileSyncAddress = "../input.txt";

const input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

const solution = (email) => {
  return `${email}??!`;
};

console.log(solution(input));
