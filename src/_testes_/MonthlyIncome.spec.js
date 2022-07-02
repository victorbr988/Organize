import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '../helpers/globalObserver';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ModalMonthlyIncome } from '../Pages/MonthlyIncome';
import userEvent from '@testing-library/user-event';

describe('Testando se os elemntos possuem na tela de "monthly-income"', () => {
  test('testa se existe um botão com o nome "Adicionar Renda mensal" na tela', () => {
    const history = createMemoryHistory();
    history.push('/monthly-income');
    render(
      <Router location={history.location} navigator={history}>
        <ModalMonthlyIncome />
      </Router>
    );

    const linkButtonAdd = screen.getByRole('button', { name: 'Adicionar Renda mensal' });

    expect(linkButtonAdd).toBeInTheDocument();
  });
  test('testa se ao clicar no botão aparece um modal com um input para o usuário digitar', () => {
    const history = createMemoryHistory();
    history.push('/monthly-income');
    render(
      <Router location={history.location} navigator={history}>
        <ModalMonthlyIncome />
      </Router>
    );
    const linkButtonAdd = screen.getByRole('button', { name: 'Adicionar Renda mensal' });

    userEvent.click(linkButtonAdd);
    const inputCamp = screen.getByRole('textbox');

    expect(inputCamp).toBeInTheDocument();
  });
  test('testa se no modal, aparece um botão com o nome "Vamos lá"', () => {
    const history = createMemoryHistory();
    history.push('/monthly-income');
    render(
      <Router location={history.location} navigator={history}>
        <ModalMonthlyIncome />
      </Router>
    );
    const linkButtonAdd = screen.getByRole('button', { name: 'Adicionar Renda mensal' });

    userEvent.click(linkButtonAdd);
    const linkButtonGo = screen.getByRole('link', { name: 'Vamos lá' });

    expect(linkButtonGo).toBeInTheDocument();
  });
  test('testa se ao clicar no botão do modal, o usuário é redirecionado para a rota "/transactions/home"', () => {
    const history = createMemoryHistory();
    history.push('/monthly-income');
    render(
      <Router location={history.location} navigator={history}>
        <ModalMonthlyIncome />
      </Router>
    );
    const linkButtonAdd = screen.getByRole('button', { name: 'Adicionar Renda mensal' });
    

    userEvent.click(linkButtonAdd);
    const linkButtonGo = screen.getByRole('link', { name: 'Vamos lá' });

    userEvent.click(linkButtonGo);
    const historyPath = history.location.pathname;

    expect(historyPath).toBe('/transactions/home');
  });
});
