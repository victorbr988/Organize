import { Home } from '../Pages/Home';
import { Simple } from '../Pages/Simple';
import { Routes, Route } from 'react-router-dom';

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Simple />} />
    </Routes>
  )
  
};
