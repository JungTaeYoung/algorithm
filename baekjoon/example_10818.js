// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

// 영수증 문제

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때

const [count, ...arr] = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

const solution = (count, arr) => {
  // javascript Math.max 기본함수를 사용하지 않고 해결해보기
  let min = 1000000;
  let max = -1000000;
  for (let i = 0; i < count; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  return `${min} ${max}`;
};

console.log(solution(count, arr));
