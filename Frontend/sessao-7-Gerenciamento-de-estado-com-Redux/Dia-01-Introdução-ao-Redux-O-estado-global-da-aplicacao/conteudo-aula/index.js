import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

// 1. Crie uma constante com o nome INITIAL_STATE que recebe um objeto com chave count e valor 0.
// 1. Criando o Reducer com Estado Inicial
const INITIAL_STATE = {
  count: 0,
};

// 2 Implementando uma função que retorna um objeto:
// 2.1 Crie uma função com o nome actionIncrement que ira retornar um objeto com chave type e valor a Action PE crie cima constante com o nome xablau que seja um objeto que possua uma chave type e um valor string INCREMENT_COUNTER.
// 2.2 Crie uma função com o nome actionDecrement que ira retornar um objeto com chave type e valor a Action PE crie cima constante com o nome xablau que seja um objeto que possua uma chave type e um valor string DECREMENT_COUNTER.


// 3.1 Implement as condicionais dentro da função reducer que ira verificar o parametro action.type:
//3.1 caso tenha valor 'INCREMENT_COUNTER' ela deve retornar esse objeto { count: state.count + 1 }
//3.2 caso a action.type tenha esse 'DECREMENT_COUNTER' ela deve retornar { count: state.count - 1 }
// Caso use switch case o default retorna state e caso use if e não contemple as condicionais o reduce retorna state

const reducer = (state = INITIAL_STATE, action) => {
  // if (action.type === 'INCREMENT_COUNTER') {
    //   return { count: state.count + 1 };
    // }
    // if (action.type === 'DECREMENT_COUNTER') {
      //   return { count: state.count - 1 };
      // }
      // return state;
      switch (action.type) {
        case 'INCREMENT_COUNTER':
          return { count: state.count + 1 };
          case 'DECREMENT_COUNTER':
            return { count: state.count - 1 };
            default:
              return state;
            }
          };
          
          // Não altere o código abaixo
          
          // 2. Criando a Store já com Redux Devtools
          const store = createStore(reducer, composeWithDevTools());
          
          // 3. Criando a Action
          const actionIncrement = () => {
            return {
              type: 'INCREMENT_COUNTER',
            };
          };
          
          const actionDecrement = () => {
            return {
              type: 'DECREMENT_COUNTER',
            };
          };

// 4. Disparando a Action

const buttonIncrement = document.querySelector('.inc');
buttonIncrement.addEventListener('click', () =>
  store.dispatch(actionIncrement())
);

const buttonDecrement = document.querySelector('.dec');
buttonDecrement.addEventListener('click', () =>
  store.dispatch(actionDecrement())
);

// 5. Lendo do Estado global

store.subscribe(() => {
  const globalState = store.getState();

  const countEl = document.querySelector('h2');
  countEl.innerHTML = globalState.count;

  console.log('Estado atualizado !');
});