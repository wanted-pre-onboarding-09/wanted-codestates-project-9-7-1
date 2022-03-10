import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './components/pages/Form';
import Home from './components/pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  );
}

export default App;
