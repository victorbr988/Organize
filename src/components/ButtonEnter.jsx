import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLoginStorage } from '../helpers/sendDataStorage';

export const ButtonEnter = () => {
  const location = useLocation();
  const { userReducer } = useSelector((state) => state);

  function sendDataStorage() {
    userLoginStorage(userReducer.id, userReducer.name);
  }

  return (
    <NavLink
      to={`${location.pathname === '/' ? '/signup' : '/monthly-income'}`}
      className="buttonGo"
      onClick={() => location.pathname === '/signup' && sendDataStorage()}
    >
      Começar
    </NavLink>
  );
};
