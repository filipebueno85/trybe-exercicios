const botaoEnviar = document.getElementById("submit-btn");
const botaoLimpar = document.getElementById("reset-btn");

botaoEnviar.addEventListener("click", function interromperBotao(event) {
  event.preventDefault();
});

botaoLimpar.addEventListener("click", function limparFormulario(event) {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
});

// esse exercício também faremos tanto no HTML quanto no Javascript. Vamos começar pelo HTML, que será bem simples. Lembra-se do nosso botão submit? Vamos definir que ele comece desabilitado:

// <button type="submit" id="submit-btn" disabled>Participar do concurso TrybeTrip</button>
// Dê um refresh na sua página e note que o botão agora está desabilitado.

// Agora vamos fazer a função responsável por habilitá-lo.

function enableSubmit() {
  const agreement = document.querySelector("#termos");
  botaoEnviar.disabled = !agreement.checked;
}

// var picker = new Pikaday({
//   field: document.getElementById('data'),
//   format: 'D MMM YYYY',
//   onSelect: function() {
//       console.log(this.getMoment().format('Do MMMM YYYY'));
//   }
// });

// window.addEventListener("DOMContentLoaded", function () {
//   const min = document.querySelector('#data [name="realDPX-min"]'),
//     max = document.querySelector('#data [name="realDPX-max"]');

//   min.DatePickerX.init({
//     mondayFirst: true,
//     minDate: new Date(2022, 10, 10),
//     maxDate: max,
//   });

//   max.DatePickerX.init({
//     mondayFirst: true,
//     minDate: min,
//     maxDate: function () {
//       const date = new Date();
//       return new Date().setDate(date.getDate() + 10);
//     },
//     clearButton: false,
//   });
// });

// Talvez o operador ! seja uma novidade para você. Então vamos explicar o que ele faz e como está funcionando nessa solução. Esse operador é chamado de “bang”, e ele representa uma negação, ou seja, o contrário do retorno de alguma coisa. Se algo for verdadeiro ele retornará falso e vice-versa.

// No nosso código, estamos dizendo que a propriedade disabled do submitBtn é igual à negação da propriedade checked da checkbox agreement. Sendo assim, se a checkbox estiver “checkada”, nosso botão não estará desabilitado (estará habilitado). Massa, né? Esse operador será muito útil em sua vida como pessoa desenvolvedora.

// Assim como as demais, vamos adicionar essa função num addEventListener, porém com checkBoxes não usamos 'click' e sim 'change'.

window.onload = function () {
  const agreement = document.querySelector("#termos");
  agreement.addEventListener("change", enableSubmit);
};
// };
// Teste para ver se está tudo funcionando como deveria. É uma função bem legal, né? E é bastante utilizada.

// Agora chegou a hora de validar a quantidade de caracteres em cada campo. Todos os campos estão criados como deveriam dentro do HTML, portanto esse exercício será feito somente no javascript. Primeiramente faremos a função que validará esses dados:

// Copiar

function textInputValidation() {
  const email = document.querySelector("#email").value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector("#nome-completo").value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector("quadro-texto").value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  } else {
    return true;
  }
}
// Agora vamos colocá-la dentro da nossa função handleSubmit que já está funcionando.

// Copiar

function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert("Dados inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}

// Tente clicar no botão sem ter preenchido um dos campos de texto e veja se o alerta aparece. Legal, não é mesmo?

// function handleSubmit(event) {
//     event.preventDefault();

//   };

//   window.onload = function () {
//     const botaoEnviar = document.getElementById('submit-btn');

//     botaoEnviar.addEventListener('click', handleSubmit);
//   };
