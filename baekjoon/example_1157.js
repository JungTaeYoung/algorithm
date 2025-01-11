// 백준 제출 전용
const path = require("path");
const readFileSyncAddress =
  require("os").platform() === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "../input.txt");

// 별찍기 문제

const input = require("fs").readFileSync(readFileSyncAddress).toString().trim();

const solution = (input = "") => {
  const bigLetter = input.toUpperCase();
  const usedText = bigLetter.split("").reduce((prev, curr) => {
    if (prev?.[curr]) {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});

  const maxCount = Math.max(...Object.values(usedText));

  const highText = Object.keys(usedText).filter(
    (key) => usedText[key] === maxCount
  );

  return highText.length > 1 ? "?" : highText[0];
};

console.log(solution(input));
