const nums = [3, 2, 3];
const target = 6;

function twoSum(nums, target) {
  let Output;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        Output = [i + 1, j + 1];
        break;
      }
    }
  }
  // console.log(Output);
  return Output;
}

const Output = twoSum(nums, target);

console.log(Output);
