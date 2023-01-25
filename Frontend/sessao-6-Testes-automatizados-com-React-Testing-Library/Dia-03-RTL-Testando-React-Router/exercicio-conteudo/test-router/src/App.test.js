import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App, { About, Home } from './App';
import renderWithRouter from './renderWithRouter';

// it('deve renderizar o componente App', () => {
//   renderWithRouter(<App />);

//   const homeTitle = screen.getByRole('heading', {
//     name: 'Você está na página Início',
//   });
//   expect(homeTitle).toBeInTheDocument();
// });
describe('teste da aplicação toda', () => {
it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});

it('deve renderizar o componente Home', () => {
  const { history } = renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: 'Início' });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/');

  const homeTitle = screen.getByRole('heading',
    { name: 'Você está na página Início' });
  expect(homeTitle).toBeInTheDocument();
});
});

describe('teste para pagina Not Found', () => {

it('deve testar um caminho não existente e a renderização do Not Found', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/pagina/que-nao-existe/');
  })

  const notFoundTitle = screen.getByRole('heading',
    { name: 'Página não encontrada' });
  expect(notFoundTitle).toBeInTheDocument();
});
});

describe('teste individual para componentes', () => {

it('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});

it('deve renderizar o componente Home (apenas componente)', () => {
  renderWithRouter(<Home />);

  const homeTitle = screen.getByRole('heading',
    { name: 'Você está na página Início' });
  expect(homeTitle).toBeInTheDocument();
});
});
