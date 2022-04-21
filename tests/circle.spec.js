/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');


describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
      expect(circle('1')).toBeUndefined();
      expect(circle(1)).toEqual({area: 3.14, circumference: 6.28, radius: 1});
      expect(circle(2)).toEqual({area: 12.56, circumference: 12.56, radius: 2});
      expect(circle()).toBeUndefined();
      expect(Object.values(circle(2))[2]).toEqual(12.56);
      expect(Object.values(circle(3))[0]).toEqual(3);
      expect((circle(3)).area).toBeCloseTo(28.26);
      expect((circle(3)).circumference).toBeCloseTo(18.84);
      expect((circle(3)).radius).toBe(3);
  });
});
