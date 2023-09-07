const s = "())";

const checkPair = (open, close) => {
  return (
    (open === "(" && close === ")") ||
    (open === "[" && close === "]") ||
    (open === "{" && close === "}")
  );
};

const isValid = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!(s[0] === "(" || s[0] === "[" || s[0] === "{")) {
      return false;
    }

    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (!checkPair(stack.pop(), s[i])) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid(s));
