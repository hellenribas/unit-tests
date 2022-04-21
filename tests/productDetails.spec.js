const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
      expect(typeof productDetails).toEqual('function');
      expect(Array.isArray(productDetails())).toBe(true);
      expect(productDetails().length).toBe(2);
      expect(typeof productDetails()[0] && typeof productDetails()[1]).toBe('object')
      expect(productDetails('Alcool gel', 'Máscara')).toEqual([
        {
          name: 'Alcool gel',
          details: {
            productId: 'Alcool gel123'
          }
        },
        {
          name: 'Máscara',
          details: {
            productId: 'Máscara123'
          }
        }
      ]);
      expect((productDetails())[0].details.productId).toMatch(/123/);
      expect((productDetails())[1].details.productId).toMatch(/123/);
  });
});
