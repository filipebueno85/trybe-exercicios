const { sum, myRemove } =  require('./sum');

  test('adiciona 4 + 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('adiciona 0 + 0 igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('adiciona 4 + "5" igual a 0', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });


  test('adiciona 4 + "5" igual a 0', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toBe();
  });


