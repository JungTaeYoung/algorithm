// 백준 제출 전용
const readFileSyncAddress =
  require("os").platform() === "linux" ? "/dev/stdin" : "../input.txt";

// 오븐 시계 문제

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

const solution = (year) => {
  // 현재시간
  const nowTime = {
    hour: input[0],
    min: input[1],
  };
  const timeMin = nowTime.hour * 60 + nowTime.min + input[2];

  // 처리시간 (분)

  nowTime.hour =
    Math.floor(timeMin / 60) - (Math.floor(timeMin / 60) >= 24 ? 24 : 0);
  nowTime.min = Math.floor(timeMin % 60);

  return `${nowTime.hour} ${nowTime.min}`;
};

console.log(solution(input));
