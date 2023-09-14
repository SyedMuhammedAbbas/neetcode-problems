const nums = [1];

const majorityElement = (nums) => {
  let freqObj = {};
  let maxFreq = 0;
  let maxElement = 0;

  if (nums.length === 1) {
    maxElement = nums[0];
    return maxElement;
  }

  for (let i = 0; i < nums.length; i++) {
    if (freqObj[nums[i]]) {
      freqObj[nums[i]]++;
      if (freqObj[nums[i]] > maxFreq) {
        maxFreq = freqObj[nums[i]];
        maxElement = nums[i];
      }
    } else {
      freqObj[nums[i]] = 1;
    }
  }
  return maxElement;
};

console.log(majorityElement(nums));
