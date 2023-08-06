s = "A man, a plan, a canal: Panama";

let isPalindrome = function (s) {
  let nonAlphanumericString = s.replace(/[^A-Za-z0-9]/g, "");
  nonAlphanumericString = nonAlphanumericString.toLowerCase();
  //   for (let i = 0; i < nonAlphanumericString.length; i++) {
  console.log(nonAlphanumericString);
  let i = 0;

  for (let j = nonAlphanumericString.length - 1; j > 0; j--) {
    if (nonAlphanumericString[i] === nonAlphanumericString[j]) {
      i++;
      continue;
    } else {
      return false;
    }
  }
  //   }

  return true;
};

let output = isPalindrome(s);

console.log(output);
