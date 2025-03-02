import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Balon from './components/Balon2';
import Home from './components/Home';

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/autor" element={<Home />} />
      </Routes>
    </Router>
    <div>
      <h1>DOdaj balon</h1>
      
    </div>
    <div>
        <h1>Kliknij na balon!</h1>
        <Balon></Balon>
    </div>
    </>
    );}

export default App;

