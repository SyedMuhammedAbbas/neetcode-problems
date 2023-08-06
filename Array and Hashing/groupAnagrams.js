const groupAnagrams = (arr) => {
  const grouped = {};

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].split("").sort().join("");
    if (grouped[sorted]) {
      grouped[sorted].push(arr[i]);
    } else {
      grouped[sorted] = [arr[i]];
    }
  }
  const output = Object.values(grouped);
  return output;
};

const stringsArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(stringsArray);
console.log(output);
