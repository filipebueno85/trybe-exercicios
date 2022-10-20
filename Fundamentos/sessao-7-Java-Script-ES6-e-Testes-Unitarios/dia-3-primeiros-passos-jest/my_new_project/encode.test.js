const { encode, decode } = require('./encode');

describe('Testando as funções encode e decode:', () =>{
  test('Teste se encode e decode são funções:', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  test('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente:', () => {
    expect(encode('filipe')).toEqual('f3l3p2');
  });

  test('tteste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente:', () => {
    expect(decode('c4r1c14')).toEqual('coracao');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(decode('1234512345')).toEqual('aeiouaeiou');
    expect(encode('aeiouaeiou')).toEqual('1234512345');
  });

  test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('12345')).toHaveLength(5);
    expect(encode('aeiou')).toHaveLength(5);
    expect(encode('trybe').length).toEqual(5);;
  });

});