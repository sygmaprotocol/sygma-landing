import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './About';
import { Home } from './Home';

export const Router: React.FC = () => (
  <Routes>
    <Route path='/about' element={<AboutPage />} />
    <Route path='/' element={<Home />} />
  </Routes>
);
