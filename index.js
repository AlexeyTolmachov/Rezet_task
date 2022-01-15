const arrOfNumbers = [1, 3, 5, 4, 5, 7];
const var1 = 1; // a > b < c ;
const var2 = 0; //a < b > c ;
const groupСheck = function (arr, variant) {
  const arrTrue = [];
  for (let index = 0; index < arr.length - 2; index++) {
    const b = index + 3;
    const result = arr.slice(index, b);
    arrTrue.push(
      Number(
        variant
          ? result[0] > result[1] && result[1] < result[2]
          : result[0] < result[1] && result[1] > result[2]
      )
    );
  }
  return arrTrue;
};

const matrixArr = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];
const result = [];
function matrix(arr , plot) {
  const  matrixArea = plot - 1;
  let arraySection = [];
  const arrayRow = [];
  const n = matrixArea + 3;
  for (let index = 0; index < arr.length; index++) {
    arraySection = arr[index].slice(matrixArea, n);
    console.log(arraySection);
    arraySection.map((item) => {
      arrayRow.push(item);
    });
  }
  const collection = new Set(arrayRow);
  let total = null;
  collection.forEach((item) => {
    total += item;
  });
  console.log(total);
  collection.size =
    9 && total === 45 ? result.push("true") : result.push("false");
  return result;
}

const textArr = [
  ["Hello", "world"],
  ["Brand", "came", "to", "dinner", "with", "us"],
  ["He", "lowes", "tacos"],
];

const instruction = ["LEFT", "RIGHT", "LEFT"];
const symbolLimit = 16;
const arrResult = [];
const startEndLine = "*".repeat(symbolLimit + 2);
const renderMessage = function (arr, instructions , symbolLimit) {
  
  let format = null;
  for (let index = 0; index < instruction.length; index++) {
    format  = instruction[index] === "LEFT";

    let result = textArr[index].join(" ");
   
    result.length < 16
      ? format 
        ? arrResult.push(`*${result.padEnd(16)}*`)
        : arrResult.push(`*${result.padStart(16)}*`)
      : format 
      ? arrResult.push(
          ...result
            .replace(/(.{1,16}) /, "$1\n")
            .split("\n")
            .map((line) => `*${line.padEnd(16)}*`)
        )
      : arrResult.push(
          ...result
            .replace(/(.{1,16}) /, "$1\n")
            .split("\n")
            .map((line) => `*${line.padStart(16)}*`)
        );
  }
  arrResult.unshift(startEndLine) && arrResult.push(startEndLine);
  return arrResult
};


