const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    const objetoRetornado1 = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    expect(typeof objetoRetornado1.fetchMenu).toEqual('function');

    const objetoRetornado2 = createMenu({ food: {}, drink: {} });
    expect(Object.keys(objetoRetornado2.fetchMenu())).toEqual(['food', 'drink']);

    const objetoRetornado3 = createMenu({ food: {coxinha: 3.90, sanduiche: 9.90 },
    drinks: {agua: 3.90, cerveja: 6.90 } });
    expect({ food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 } }).toEqual(objetoRetornado3.fetchMenu());

    const objetoRetornado4 = createMenu({ food: {}, drink: {} });
    expect(objetoRetornado4.consumption).toEqual([]);

     const objetoRetornado5 = createMenu({ food: {}, drink: {} });
     expect(objetoRetornado5.order('coxinha', objetoRetornado5)).toEqual(objetoRetornado5.consumption);

    expect(objetoRetornado5.order('coxinha', objetoRetornado5) && objetoRetornado5.order('agua', objetoRetornado5) && objetoRetornado5.order('sopa', objetoRetornado5)).toEqual(objetoRetornado5.consumption);

    expect(objetoRetornado5.order('coxinha', objetoRetornado5) && objetoRetornado5.order('agua', objetoRetornado5) && objetoRetornado5.order('coxinha', objetoRetornado5)).toEqual(objetoRetornado5.consumption);

    const objetoRetornado6 = createMenu({ food: { coxinha: 3.90 }, drink: { agua: 3.80 } });
    const ord = objetoRetornado6.order('coxinha,agua', objetoRetornado6);
    const verify = () => {
    let value = 0;
    for (let elem of ord) {
      if (elem === 'coxinha') {
        value += 3.90 + 0.1 * 3.90;
       } else { 
        value += 3.80 + 0.1 * 3.80; 
      }
    }
    return value;
    };
      expect(objetoRetornado6.pay(objetoRetornado6, 'coxinha,agua')).toEqual(verify());
  });
});
