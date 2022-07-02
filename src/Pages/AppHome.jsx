import { getUser } from '../helpers/sendDataStorage';
export const AppHome = () => {
  const { name } = getUser('UserData');

  return <p>Bem vindo {name}</p>;
};
