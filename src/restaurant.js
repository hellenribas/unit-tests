/* eslint-disable max-len */

let sum1 = 0;
let sum2 = 0;
const myMenu = (string, object) => {
  let arrayConv = string.split(',');
  object.consumption = arrayConv;
  return arrayConv;
};
const drinks = (objects, string) => {
  let drink = Object.keys(objects.fetchMenu().drink);
  for (let elem of drink) {
  if ((objects.order(string, objects)).includes(elem)) {
    sum1 += Number(objects.fetchMenu().drink[elem]);
  }
}
return sum1;
};

const foods = (objects, string) => {
  let foodArray = Object.keys(objects.fetchMenu().food);
  for (let elem of foodArray) {
    if ((objects.order(string, objects)).includes(elem)) {
      sum2 += Number(objects.fetchMenu().food[elem]);
   } 
  }
  return sum2;
};

const payMenu = (objects, string) => {
  let value1 = foods(objects, string);
  let value2 = drinks(objects, string);
  return (value1 + value2) + (0.1 * (value1 + value2));
};
const createMenu = (objects) => (
  { fetchMenu: () => (objects), consumption: [], order: myMenu, pay: payMenu }
  );

module.exports = createMenu;