const nums = [1, 1, 1, 2, 2, 3];

const removeDuplicates = (nums) => {
  let freqObj = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (freqObj[nums[i]] < 2) {
      result.push(nums[i]);
      freqObj[nums[i]]++;
    } else if (!freqObj[nums[i]]) {
      freqObj[nums[i]] = 1;
      result.push(nums[i]);
    }
  }

  for (let j = 0; j < result.length; j++) {
    nums[j] = result[j];
  }
  //   console.log(nums);
  return result.length;
};

console.log(removeDuplicates(nums));
