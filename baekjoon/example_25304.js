// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

// 영수증 문제

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때

const [money, count, ...arr] = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

const solution = (money, count, arr) => {
  let moneyTotal = 0;
  for (let i = 0; i < count; i++) {
    moneyTotal += arr[i * 2] * arr[i * 2 + 1];
  }

  return money === moneyTotal ? "Yes" : "No";
};

console.log(solution(money, count, arr));
