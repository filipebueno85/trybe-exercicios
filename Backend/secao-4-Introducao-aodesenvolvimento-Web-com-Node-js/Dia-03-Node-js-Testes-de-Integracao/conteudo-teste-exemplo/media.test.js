// const { expect } = require('chai');
// const resposta = calculaSituacao(4);
// "test": "mocha tests/**/*.test.js --exit"
// expect(resposta).equals('reprovação');

const { expect } = require('chai');
const calculaSituacao = require('./media');



describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovação');
  });
});