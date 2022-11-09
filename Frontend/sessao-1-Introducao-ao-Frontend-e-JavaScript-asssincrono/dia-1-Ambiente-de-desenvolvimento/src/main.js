import validator from 'validator';

const botao = document.querySelector('#button');
const valor = document.querySelector('#value');
const options = document.querySelector('#option');
const resposta = document.querySelector('#answer');
const numero = 4;

botao.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(options);
  const campos = {
    cpf: validator.isTaxID(valor.value, 'pt-BR'),
    hexColor: validator.isHexColor(valor.value),
    email: validator.isEmail(valor.value),
    uuid: validator.isUUID(valor.value, numero),
    url: validator.isURL(valor.value),
  };
  resposta.innerHTML = `A validação retornou ${campos[options.value]}`;
});
