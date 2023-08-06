let nums = [1, 2, 3, 4];

const containsDuplicate = (nums) => {
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (temp === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

let output = containsDuplicate(nums);

console.log(output);
