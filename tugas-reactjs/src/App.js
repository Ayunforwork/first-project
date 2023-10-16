import React from 'react';
import './App.css';
import Tugas7 from './tugas7/tugas7';
import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Tugas15List from './tugas15/Tugas15List';
import Tugas15form from './tugas15/Tugas15Form';

const App = () => {
  return (

    <BrowserRouter>
      <GlobalProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Tugas7 />} />
          <Route path='/tugas15' element={<Tugas15List />} />
          <Route path='/create' element={<Tugas15form />} />
          <Route path='/edit/:idData' element={<Tugas15form/>} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App;
