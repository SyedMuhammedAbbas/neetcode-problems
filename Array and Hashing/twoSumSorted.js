const nums = [1, 2, 4, 9];
const target = 5;

function twoSum(nums, target) {
  let i = 0;
  //   let a = 0;
  let b = 1;
  while (true) {
    // let x = ;
    // let y = ;

    if (nums[i] + nums[nums.length - b] === target) {
      return [i + 1, nums.length - b + 1];
    } else if (nums[i] + nums[nums.length - b] < target) {
      i++;
      //   x = nums[i + a];
    } else if (nums[i] + nums[nums.length - b] > target) {
      b++;
      //   y = nums[nums.length - b];
    }
  }
  // console.log(Output);
  return false;
}

const Output = twoSum(nums, target);

console.log(Output);
