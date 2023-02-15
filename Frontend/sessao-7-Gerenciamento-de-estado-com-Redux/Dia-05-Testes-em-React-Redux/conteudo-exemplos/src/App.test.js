// ./src/App.test.js
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import App from './App';
import counterReducer from './redux/reducers/counterReducer';
// const { store } = renderWithRedux(<App />);
const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

// const renderWithRedux = (
//   component,
//   {
//     initialState,
//     store = createStore(
//       reducer,
//       initialState,
//       applyMiddleware(thunk)
//     ),
//   } = {}
// ) => ({
//   ...render(<Provider store={store}>{component}</Provider>),
//   store,
// });


test('A página deve renderizar dois botões e o número "0"', () => {
  const initialState = {
    counterReducer: {
      count: 0,
    }
  }
  renderWithRedux(<App />, {initialState});
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByRole('heading', {
    name: /0/i
  })).toBeInTheDocument();
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const initialState = {
    counterReducer: {
      count: 10,
    }
  }
  renderWithRedux(<App />, { initialState });

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('Incrementa o valor da store ao clicar no botão', () => {
  const { store } = renderWithRedux(<App />);
  expect(screen.getByText('0')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(0);
  const button = screen.getByText('Incrementa 1');
  userEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(1);
});
