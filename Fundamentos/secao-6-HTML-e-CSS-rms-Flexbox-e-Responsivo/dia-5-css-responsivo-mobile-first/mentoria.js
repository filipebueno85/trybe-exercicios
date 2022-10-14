const botao = document.getElementById("botao");
const nome = document.getElementById("first-name");
const sobrenome = document.getElementById("last-name");
const radio = document.getElementsByClassName("estilos");
// botao.addEventListener("click", enviarBotao);
nome.addEventListener('keyup', enviarBotao);
sobrenome.addEventListener('keyup', enviarBotao);




function enviarBotao() {

  if (nome.value.length > 0 && sobrenome.value.length > 0) {
    botao.disabled = false;
  }
};




