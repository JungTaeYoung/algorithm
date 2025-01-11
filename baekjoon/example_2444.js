// 백준 제출 전용
const path = require("path");
const readFileSyncAddress =
  require("os").platform() === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "../input.txt");

// 별찍기 문제

const count = require("fs").readFileSync(readFileSyncAddress).toString().trim();

const solution = (count) => {
  const maxStar = count * 2 - 1;
  const result = [];

  for (let i = 1; i <= maxStar; i++) {
    const emptyCount = Math.abs(count - i);
    const starCount = maxStar - emptyCount * 2;

    const line = " ".repeat(emptyCount) + "*".repeat(starCount);

    result.push(line);
  }

  console.log(result.join("\n"));
};

// const solution = (count) => {
//   const maxStar = count * 2 - 1;
//   const top = [];

//   for (let i = 1; i <= count; i++) {
//     const emptyCount = count - i;
//     const starCount = i * 2 - 1;

//     const line = " ".repeat(emptyCount) + "*".repeat(starCount);

//     top.push(line);
//   }

//   const bottom = structuredClone(top).reverse().slice(1);

//   console.log([...top, ...bottom].join("\n"));
// };

solution(count);
