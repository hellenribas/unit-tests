const calculator = (number1, number2) => (
{ 
  sum: number1 + number2,
  mult: number1 * number2, 
  div: Math.floor(number1 / number2), 
  sub: number1 - number2 }

);

const arrayGenerator = (type, object) => {
  let types = '';
  if (type === 'keys') {
    types = Object.keys(object);
  } else if (type === 'values') {
    types = Object.values(object);
  } else if (type === 'entries') {
    types = Object.entries(object);
  }
  return types;
};

module.exports = { calculator, arrayGenerator };
