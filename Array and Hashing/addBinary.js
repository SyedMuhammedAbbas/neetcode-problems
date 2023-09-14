const a = "1010";
const b = "1011";

const addBinary = (a, b) => {
  let carry = 0;
  let result = [];

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = digitA + digitB + carry;

    result.unshift(sum % 2);
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result.join("");
};

console.log(addBinary(a, b));
