// const nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
// const nums = [0, 1, 1];
// const nums = [0, 0, 0];
const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  // let temp;
  let output = [];

  // bruteforce approach
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //       if (nums[i] + nums[j] + nums[k] === 0) {
  //         temp = [nums[i], nums[j], nums[k]];
  //         let shouldAdd = true;
  //         temp.sort((a, b) => a - b);
  //         for (let z = 0; z < output.length; z++) {
  //           output[z].sort((a, b) => a - b);

  //           if (
  //             output[z][0] === temp[0] &&
  //             output[z][1] === temp[1] &&
  //             output[z][2] === temp[2]
  //           ) {
  //             shouldAdd = false;
  //           }
  //         }

  //         if (shouldAdd) {
  //           output.push(temp);
  //         }
  //       }
  //     }
  //   }
  // }

  // two pointers approach
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        output.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return output;
};

console.log(threeSum(nums));
