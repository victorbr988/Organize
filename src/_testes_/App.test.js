import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux'

test('renders learn react link', () => {
  const { history } = renderWithRouterAndRedux(<App />);
  history.push('/home')
  const linkElement = screen.getByText('Hello world');
  expect(linkElement).toBeInTheDocument();
});
