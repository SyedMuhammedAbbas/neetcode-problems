let k = [8, 5, 8, 5, 8, 8];

var solution = function (k) {
  const frequencyCandy = {};
  let pairsCount = 0;

  for (const i of k) {
    if (frequencyCandy[i]) {
      frequencyCandy[i]++;
    } else {
      frequencyCandy[i] = 1;
    }
  }
  //   console.log(frequencyCandy);
  for (const k in frequencyCandy) {
    if (frequencyCandy[k] % 2 === 0) {
      //   console.log(frequencyCandy[k]);
      pairsCount += frequencyCandy[k] / 2;
    } else {
      pairsCount += frequencyCandy[k] - 1 / 2;
    }
  }

  if (pairsCount === 0) {
    return -1;
  } else {
    return pairsCount;
  }
};

console.log(solution(k));
