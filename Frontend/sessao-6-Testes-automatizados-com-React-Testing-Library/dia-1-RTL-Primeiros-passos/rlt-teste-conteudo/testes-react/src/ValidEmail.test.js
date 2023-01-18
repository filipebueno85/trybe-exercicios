import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando a cor da mensagem email Válido', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  userEvent.type(EMAIL_USER);
  expect(isValid).toBeInTheDocument();
  expect(isValid).toHaveStyle({ color: 'green'});

});

test('Testando a cor da mensagem email inválido', () => {
  const EMAIL_USER = 'adadadaadad';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  userEvent.type(EMAIL_USER);
  expect(isValid).toBeInTheDocument();
  expect(isValid).toHaveStyle({ color: 'red'});
});

test('Testando email caso nao seja enviado.', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.queryByText('Email Válido');
  expect(isValid).toBeNull();
});

