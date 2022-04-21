/* eslint-disable no-unused-vars */

const vqv = (string, num) => {
  if (string === undefined || num === undefined) {
    return undefined;
  }
  return `Oi, meu nome é ${string}!
Tenho ${num} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};
  
module.exports = vqv;
