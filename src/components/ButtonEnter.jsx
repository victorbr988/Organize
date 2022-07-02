import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const ButtonEnter = () => {
  const location = useLocation();
  return (
    <NavLink
      to={`${location.pathname === '/' ? '/signup' : '/monthly-income'}`}
      className="buttonGo"
    >
      Começar
    </NavLink>
  );
};
