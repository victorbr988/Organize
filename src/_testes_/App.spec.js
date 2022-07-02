import React from 'react'
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando se os elemntos possuem na tela de "App"', () => {
  test('testa se os elementos são renderizados na tela', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
    const linkElement = screen.getByText('Organize');
    const apresentation = screen.getByTestId('apresentation');
    const linkButton = screen.getByRole('link', {name: 'Começar'})
  
    expect(linkElement).toBeInTheDocument();
    expect(apresentation).toBeInTheDocument();
    expect(linkButton).toBeInTheDocument();
  });
  test('Testa se ao clicar no botão começar, o usuário é redirecionado para a rota "/signup"', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
    
    const linkButton = screen.getByRole('link', {name: 'Começar'})

    userEvent.click(linkButton)
    const historyPath = history.location.pathname
    expect(historyPath).toBe('/signup')

  });
})
