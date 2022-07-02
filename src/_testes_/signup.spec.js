import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Signup } from '../Pages/Signup';
import userEvent from '@testing-library/user-event';

describe('Testando se os elemntos possuem na tela de "Signup"', () => {
  test('testa se os elementos são renderizados na tela', () => {
    const history = createMemoryHistory();
    history.push('/signup');
    render(
      <Router location={history.location} navigator={history}>
        <Signup />
      </Router>
    );

    const TitleElement = screen.getByText('Organize');
    const linkButton = screen.getByRole('link', { name: 'Começar' });
    const linkButtonBack = screen.getByRole('link', { name: 'Voltar' });

    expect(TitleElement).toBeInTheDocument();
    expect(linkButton).toBeInTheDocument();
    expect(linkButtonBack).toBeInTheDocument();
  });
  test('Testa se ao clicar nos botão de voltar, o usuário é redirecionado para a rota "/"', () => {
    const history = createMemoryHistory();
    history.push('/signup');
    render(
      <Router location={history.location} navigator={history}>
        <Signup />
      </Router>
    );

    const linkButtonBack = screen.getByRole('link', { name: 'Voltar' });

    userEvent.click(linkButtonBack);
    const histotyPath = history.location.pathname;
    expect(histotyPath).toBe('/');
  });
  test('Testa se ao clicar nos botão de Começar, o usuário é redirecionado para a rota "/monthly-income"', () => {
    const history = createMemoryHistory();
    history.push('/signup');
    render(
      <Router location={history.location} navigator={history}>
        <Signup />
      </Router>
    );

    const linkButtonBack = screen.getByRole('link', { name: 'Começar' });

    userEvent.click(linkButtonBack);
    const histotyPath = history.location.pathname;
    expect(histotyPath).toBe('/monthly-income');
  });
});
