let animals = "cat donkey coW CaT coW.";
let f = ["donkey"];

var solution = function (animals, f) {
  let inputArray;
  let animalsObj = {};
  let maxFrequency = 0;
  let animalWithMaxFrequency = null;

  inputArray = animals.split("/[!?',.; ]+/");

  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].toLowerCase();
  }

  for (const i of inputArray) {
    if (animalsObj[i]) {
      animalsObj[i]++;
    } else {
      animalsObj[i] = 1;
    }
  }

  for (const key in animalsObj) {
    if (animalsObj[key] > maxFrequency) {
      maxFrequency = animalsObj[key];
      animalWithMaxFrequency = key;
    }
  }

  return animalWithMaxFrequency;
};

console.log(solution(animals, f));
