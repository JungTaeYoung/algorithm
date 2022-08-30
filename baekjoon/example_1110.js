// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

// 더하기 사이클 문제

const input = +require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim();

const solution = (input) => {
  let number = input;
  let count = 0;
  let sum = 0;
  while (true) {
    count++;
    sum = Math.floor(number / 10 + (number % 10));
    number = (number % 10) * 10 + (sum % 10);
    if (input == number) {
      break;
    }
  }
  return count;
};

console.log(solution(input));
