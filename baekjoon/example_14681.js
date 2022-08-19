// 백준 제출 전용
const readFileSyncAddress = "/dev/stdin";

// 테스트 전용
// const readFileSyncAddress = "../input.txt";

// 사분면 고르기 문제
// readFileSync /dev/stdin 에서 런타임 에러가나.. 0으로 변경해줬다

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);

const solution = (input) => {
  const [x, y] = input;
  if (x > 0) {
    if (y > 0) return 1;
    else return 4;
  } else {
    if (y > 0) return 2;
    else return 3;
  }
};

console.log(solution(input));
