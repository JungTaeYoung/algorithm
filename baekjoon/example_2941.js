// 백준 제출 전용
const path = require("path");
const readFileSyncAddress =
  require("os").platform() === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "../input.txt");

// 크로아티아 알파벳

const word = require("fs").readFileSync(readFileSyncAddress).toString().trim();

const alphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

const solution = (word) => {
  let wordText = word;
  alphabets.forEach((alpha) => {
    wordText = wordText.replaceAll(alpha, "#");
  });

  console.log(wordText.length);
};

solution(word);
