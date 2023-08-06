const nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
// const nums = [0, 1, 1];
// const nums = [0, 0, 0];

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let temp;
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          temp = [nums[i], nums[j], nums[k]];
          let shouldAdd = true;

          for (let z = 0; z < output.length; z++) {
            if (
              output[z].includes(temp[0]) &&
              output[z].includes(temp[1]) &&
              output[z].includes(temp[2])
            ) {
              shouldAdd = false;
              break;
            }
          }

          if (shouldAdd) {
            output.push(temp);
          }
        }
      }
    }
  }

  return output;
};

console.log(threeSum(nums));
