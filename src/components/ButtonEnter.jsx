import { NavLink } from "react-router-dom"
import { useLocation } from 'react-router-dom';
export const ButtonEnter = () => {
  const location = useLocation()
  return (
    <NavLink
      to={`${location.pathname === '/' ? '/signup': '/monthly-income'}`}
      className="bg-[#6EE7B7] w-32 text-[#1E293B] text-2xl mx-3 p-3 rounded-md">
      Começar
    </NavLink>
  )
}