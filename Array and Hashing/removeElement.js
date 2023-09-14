const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const removeElement = (nums, val) => {
  let total_length = nums.length - 1;

  for (let i = 0; i <= total_length; i++) {
    if (nums[i] === val) {
      while (nums[total_length] === val && total_length > i) {
        total_length--;
      }
      nums[i] = nums[total_length];
      total_length--;
    }
  }
  return nums.slice(0, total_length + 1);
};

const output = removeElement(nums, val);
console.log(output);
