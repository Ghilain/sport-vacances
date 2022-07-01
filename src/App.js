import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/header';
import HomePage from './pages/HomePage';
import Country from './pages/Details';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/player/name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
