import React from 'react';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Home from './pages/home';
import AddEmprunt from './pages/addEmprunt';
import ShowMateriel from './pages/showMateriel';
import AddMateriel from './pages/addMateriel';
import ShowEmprunt from './pages/showEmprunt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/showEmprunt' element={<ShowEmprunt/>} />
          <Route path='/showMateriel' element={<ShowMateriel/>} />
          <Route path='/addEmprunt' element={<AddEmprunt/>} />
          <Route path='/addMateriel' element={<AddMateriel/>} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);
reportWebVitals();
