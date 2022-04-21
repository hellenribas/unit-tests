const mediaCalc = (array) => {
  let media = 0;
  let sum = 0;
  for (let elem of array) {
    sum += elem;
  }
  media = Math.round(sum / array.length);
  return media;
};

const average = (array) => {
  if (array.length <= 0) {
    return undefined;
  }
  for (let elem of array) {
  if (typeof elem !== 'number') {
    return undefined;
  }
}
return mediaCalc(array);
};

module.exports = average;
