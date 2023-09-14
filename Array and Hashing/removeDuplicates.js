const nums = [-1, 0, 0, 0, 0, 3, 3];

const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};

console.log(removeDuplicates(nums));
