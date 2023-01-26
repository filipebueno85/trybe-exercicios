import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const actionNext = () => {
  return { type: NEXT_COLOR };
};

const actionPrevious = () => {
  return { type: PREVIOUS_COLOR };
};

const actionRandom = () => {
  return { type: RANDOM_COLOR };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return { ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1, }
      case PREVIOUS_COLOR:
        return { ...state,
          index: state.index === 0 ? state.colors.length - 1 : state.index - 1,}
          case 'RANDOM_COLOR':
            return {
              ...state,
              colors: [...state.colors, criarCor()],
              index: state.colors.length,
            };
          default:
          return state;
        }
      };
      
const store = createStore(reducer, composeWithDevTools());

const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const btnRandom = document.getElementById('random');

nextButton.addEventListener('click', () => store.dispatch(actionNext()));
previousButton.addEventListener('click', () => store.dispatch(actionPrevious()));
btnRandom.addEventListener('click', () => store.dispatch(actionRandom()));
// mesmo efeito do APP que renderiza na tela 
store.subscribe(() => {
  const { colors, index } = store.getState();
  const colorChage = document.querySelector('#value');
  colorChage.innerHTML = colors[index];
  console.log(colors);
  const container = document.querySelector('#container');
  container.style.backgroundColor = colors[index];
});
