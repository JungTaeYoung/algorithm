// 백준 제출 전용
const path = require("path");
const readFileSyncAddress =
  require("os").platform() === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "../input.txt");

// 별찍기 문제

const input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

const solution = (input) => {
  const isPalindrome = input === input.split("").reverse().join("");
  return isPalindrome ? 1 : 0;
};

console.log(solution(input));
