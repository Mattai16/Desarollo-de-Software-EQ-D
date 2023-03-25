import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ProductsPage from './components/ProductsPage';
import ProgramPage from './components/ProgramPage';


// Components
import Header from "./components/Header";
import EmployForm from "./components/EmployForm";
import Employs from "./components/Employs";


function App() {

  const [employs, setEmploys] = useState([]);

  useEffect(() => {
    axios.get('/get/')
    .then((response) => {
      setEmploys(response.data)
    }).catch(() => {
      alert('Algo fue mal!')
    })
  }, [])


//Se agrega en el Path el mismo que tiene el navbar
  return (
    <Router>
      <Navbar />
       
      <Switch>
        <Route path="/contacto" element={<ContactPage />} />   
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/Inicio" element={<HomePage />} />
        <Route path="/programa" element={<ProgramPage />} />
      </Switch>
    </Router>
  );
}

export default App;
