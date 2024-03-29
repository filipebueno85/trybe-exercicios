function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
//   Parte 1

// Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>


const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function cerateMonthDays () {
    
    let getDayList = document.querySelector('#days');

    for (let index = 0; index < decemberDaysList.length; index += 1){
      const day = decemberDaysList[index];
      const dayItem = document.createElement('li');
      dayItem.innerHTML = day;
      
      if (day === 24 || day === 31) {
        dayItem.className = 'day holiday';
        getDayList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day === 18) {
        dayItem.className = 'day friday';
        getDayList.appendChild(dayItem);
      }else if (day === 25) {
        dayItem.className = 'day friday holiday'
        getDayList.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        getDayList.appendChild(dayItem);
      }
    }
   
  }
  cerateMonthDays();

  // const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  // const sextas = [4, 11, 18, 25];
  // const feriados = [24, 25, 31];
  
  // function criaDias() {
  //   // seleciona elemento pai
  //   const elementoPai = document.getElementById('days');
  
  //   for (let id = 0; id < decemberDaysList.length; id += 1) {
  //     // cria o elemento
  //     const minhaLi = document.createElement('li');
  //     // atribuir as propriedades
  //     minhaLi.classList = 'day';
  //     minhaLi.innerText = decemberDaysList[id];
  
  //     if (sextas.includes(decemberDaysList[id])) {
  //       minhaLi.classList.add('friday');
  //     };
  
  //     if (feriados.includes(decemberDaysList[id])) {
  //       minhaLi.classList.add('holiday');
  //     }
  
  //     // appendChild
  //     elementoPai.appendChild(minhaLi);
  //   }
  // }


//   Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

  function createButtomFeriado (nomedobotao) {
    const getButton = document.querySelector('.buttons-container');
    const feriadoButton = document.createElement('button');
    let buttonID = 'btn-holiday'
    feriadoButton.id = buttonID;

    feriadoButton.innerHTML = nomedobotao;

    getButton.appendChild(feriadoButton);
  }
  createButtomFeriado('Feriados');

//   Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
 
  function mudaCorDoBotao () {
    const getButtonHoliday = document.querySelector('#btn-holiday');
    const getHolidays = document.querySelectorAll('.holiday');
    let backGroundColor = 'rgb(238,238,238)';
    let novaCorButton = 'white';

    getButtonHoliday.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === novaCorButton) {
          getHolidays[index].style.backgroundColor = backGroundColor;
        }else {
          getHolidays[index].style.backgroundColor = novaCorButton;
        }
      }
    });
  }
  mudaCorDoBotao();

//   Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function createButtomFriday (botaofriday) {
  const getButton = document.querySelector('.buttons-container');
  const fridayButton = document.createElement('button');
  let fridayButtonID = 'btn-friday';
  fridayButton.id = fridayButtonID;
  fridayButton.innerHTML = botaofriday;

  getButton.appendChild(fridayButton);
  
};
createButtomFriday('Sexta-feira');

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function displayFridays (fridayButtonArray) {
  const getfridayButton = document.querySelector('#btn-friday');
  const fridayButton = document.querySelectorAll(".friday");
  let newTextFriday = 'Sextou!';

  getfridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridayButton.length; index += 1) {
      if (fridayButton[index].innerHTML !== newTextFriday) {
        fridayButton[index].innerHTML = newTextFriday;  
      }else {
        fridayButton[index].innerHTML = fridayButtonArray[index];
      }
    }
  });
}
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

// implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target.

function dayMouseOver () {
const mouseOver = document.querySelector('#days');
mouseOver.addEventListener('mouseover', function(event) {
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';
});
}

function dayMouseOut () {
  const mouseOut = document.querySelector('#days');
  mouseOut.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}
dayMouseOver()
dayMouseOut()

// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function novaTarefa (tarefa) {
  const getTarefa = document.querySelector('.my-tasks');
  const nomeTarefa =  document.createElement('span');
  
  nomeTarefa.innerHTML = tarefa;

  getTarefa.appendChild(nomeTarefa);

};
novaTarefa('Projeto');

// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

function adicionaLegenda (color) {
  const getTarefa = document.querySelector('.my-tasks');
  const tarefas = document.createElement('div');
 
  tarefas.className = 'task';
  tarefas.style.backgroundColor = color;
  getTarefa.appendChild(tarefas);
};
adicionaLegenda('red');

// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function selectTarefa () {
  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let tarefa = document.querySelector('.task');
  tarefa.addEventListener('click', function(event) {
    if (tarefaSelecionada.length === 0){
      event.target.className = 'task selected'; 
    }else {
      event.target.className = 'task';
    }
  });
}
selectTarefa();

// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

function atribuirCorAoDia() {
  const tarefaSelecionada = document.getElementsByClassName('task selected');
  const days = document.querySelector('#days');
  const getTarefa = document.querySelector('.my-tasks');
  const tarefa = document.querySelector('.task');
  const tarefaColor = tarefa.style.backgroundColor;

  days.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;

    if (tarefaSelecionada.length > 0 && eventTargetColor !== tarefaColor) {
      let color = tarefaSelecionada[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === tarefaColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });  
} 
atribuirCorAoDia();

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”.
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”.
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// Dica - Propriedade: key.

// function adicionaCompromisso() {
//   const getIput = document.querySelector('#task-input');
//   const 
// }