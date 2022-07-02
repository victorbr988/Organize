import { Home } from '../Pages/Home';
import { Signup } from '../Pages/Signup';
import { Routes, Route } from 'react-router-dom';
import { ModalMonthlyIncome } from '../Pages/MonthlyIncome';
import { AppHome } from '../Pages/AppHome';

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/monthly-income" element={<ModalMonthlyIncome />} />
      <Route path="/transactions/home" element={<AppHome />} />
    </Routes>
  );
};
