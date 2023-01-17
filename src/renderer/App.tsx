import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello world!</div>} />
      </Routes>
    </Router>
  );
}
