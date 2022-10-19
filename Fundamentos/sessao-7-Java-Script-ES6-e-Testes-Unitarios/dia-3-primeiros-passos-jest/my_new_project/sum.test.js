// const sum = (a, b) => a + b;

// test('soma dois valores', () => {
//   expect(sum(2, 3)).toEqual(5);
// });

const { sum } =  require('./sum');

describe('Função sum', () => {
  test('adiciona 4 + 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
};