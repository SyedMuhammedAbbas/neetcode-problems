let nums = [4, 1, -1, 2, -1, 2, 3];
let k = 2;

let topKFrequent = function (nums, k) {
  let temp = {};

  let sortedArray = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (temp[sortedArray[i]]) {
      temp[sortedArray[i]]++;
    } else {
      temp[sortedArray[i]] = 1;
    }
  }

  let output = Object.entries(temp);

  let sortedObject = output.sort((a, b) => b[1] - a[1]);

  //   console.log(sortedObject);
  let output1 = [];
  let intArray = [];

  let firstElements = sortedObject.map((innerArray) => innerArray[0]);

  for (let i = 0; i < firstElements.length; i++) {
    intArray.push(parseInt(firstElements[i]));
  }

  //   let sortedOutput = intArray.sort((a, b) => a - b);

  for (let i = 0; i < k; i++) {
    output1.push(intArray[i]);
  }

  return output1;
};

const output = topKFrequent(nums, k);

console.log(output);
