import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
