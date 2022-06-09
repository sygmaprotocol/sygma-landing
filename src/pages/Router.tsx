import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
