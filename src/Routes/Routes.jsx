import { Home } from '../Pages/Home';
import { Signup } from '../Pages/Signup';
import { Routes, Route } from 'react-router-dom';

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
  
};
