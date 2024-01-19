import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Goals from "./components/Goals";
import Personalplan from './components/Personalplan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/personalplan" element={<Personalplan />} /> 
      </Routes>
    </Router>
  );
}

export default App;



