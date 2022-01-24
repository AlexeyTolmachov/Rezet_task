const arrOfNumbers = [1, 3, 5, 4, 5, 7];
const groupСheck = function (arr) {
  const arrTrue = [];
  for (let index = 0; index < arr.length - 2; index++) {
    const b = index + 3;
    const result = arr.slice(index, b);
    arrTrue.push(
      Number(
        (result[0] > result[1] && result[1] < result[2]) ||
          (result[0] < result[1] && result[1] > result[2])
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
function matrix(arr, plot) {
  if (arr.length < 3) {
    throw new RangeError("Wrong array length (matrix size should be 3 X 3n) ");
  }
  const matrixArea = plot - 1;
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
  if (arrayRow.length >= 9) {
    const collection = new Set(arrayRow);
    let total = null;
    collection.forEach((item) => {
      if (item % 1 !== 0) {
        throw new RangeError("number in array must be integer");
      }
      total += item;
    });
    collection.size =
      9 && total === 45 ? result.push("true") : result.push("false");
    return result;
  }
  throw new RangeError("Wrong array length (matrix size should be 3 X 3n)");
}




const textArr = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "lowes", "tacos"],
];

const instruction = ["LEFT", "RIGHT", "LEFT"];
const symbolLimit = 16;
const arrResult = [];
const startEndLine = "*".repeat(symbolLimit + 2);

const renderMessage = function (arr, instructions, symbolLimit = 16) {
  for (let index = 0; index < instruction.length; index++) {
    const format = instruction[index] === "LEFT";
    const result = textArr[index].join(" ");
    const newResult = textArr[index];

    result.length < symbolLimit
      ? format
        ? arrResult.push(`*${result.padEnd(symbolLimit)}*`)
        : arrResult.push(`*${result.padStart(symbolLimit)}*`)
      : 
       (function () {
          const intermediateArr = [];
          for (let index = 0; result.length > symbolLimit; ++index) {
            intermediateArr.push(newResult[index]);
            if (
              intermediateArr.join(" ").length > symbolLimit ||
              newResult [index] === undefined
            ) {format?
              arrResult.push(
                `*${intermediateArr
                  .splice(0, intermediateArr.length - 1)
                  .join(" ")
                  .padEnd(symbolLimit)}*`
              ):arrResult.push(
                `*${intermediateArr
                  .splice(0, intermediateArr.length - 1)
                  .join(" ")
                  .padStart(symbolLimit)}*`
              );
            }
            if (newResult[index] === undefined) {
              break;
            }
          }
        })()
     
  }
  arrResult.unshift(startEndLine) && arrResult.push(startEndLine);
  return arrResult;
};
