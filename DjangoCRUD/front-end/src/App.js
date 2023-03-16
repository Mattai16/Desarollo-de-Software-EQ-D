import React, { useState, useEffect } from "react";
import axios from 'axios';

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



  return (
    <>
    <Header/>
    <div className="container p-4">
      <EmployForm employs={employs} setEmploys={setEmploys}/>
      <Employs employs={employs} setEmploys={setEmploys}/>
    </div>
    
    </>
  );
}

export default App;
