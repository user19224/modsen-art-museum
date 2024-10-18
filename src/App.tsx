import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Modal from 'react-modal';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<div>Избранное</div>} />
        <Route path="/about" element={<div>О проекте</div>} />
      </Routes>
    </Router>
  );
}

export default App;
