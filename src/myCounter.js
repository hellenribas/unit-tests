/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

const myCounter = () => {
  let myArray = [];
  for (let counters = 0; counters <= 3; counters += 1) {
    myArray.push(counters);
    for (let counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
    }
  }
  return myArray;
};

module.exports = myCounter;
