const nums1 = [0];
const m = 0;
const nums2 = [1];
const n = 1;

const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let total_length = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[total_length] = nums1[i];
      i--;
      total_length--;
    } else {
      nums1[total_length] = nums2[j];
      j--;
      total_length--;
    }
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
