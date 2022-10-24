const myRemove = require('./myFizzBuzz');

describe('Teste função myFizzBuzz', () => {
  test('teste um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myRemove(15)).toBe('fizzbuzz');
  });

  test('teste um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myRemove(3)).toBe('fizz');
  });

  test('teste um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myRemove(5)).toBe('buzz');
  });

  test('teste um número que nao é divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myRemove(13)).toBe(13);
  });

  test('teste com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myRemove('5')).toBe(false);
  });

});