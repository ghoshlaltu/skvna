
import React, { Component, useState, useEffect } from 'react'
//laltu
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import About from './components/pages/about';
import Procedure from './components/pages/procedure';
import Contact from './components/pages/contact';


function App() {
  const [spinner, setSpinner] = useState(false);
  const [ServiceCategoryData, setServiceCategoryData] = useState([])

  useEffect(()=>{
    var asset_category_id = 1;

    setSpinner(true);
    fetch('http://127.0.0.1:8000/api/get-service-category', {
      method: 'POST',
      headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
      // body: "asset_category_id="+asset_category_id // <-- Post parameters
      body: "" // <-- Post parameters
      
      })
      .then(response => response.json())
      .then(result => {
        console.log(result.data); 
        
        setServiceCategoryData(result.data)
        setTimeout(() => {
          //simulates an api call to the backend
          setSpinner(false);
      }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },[]);

     //console.log(ServiceCategoryData);


  return (
    <>
    {spinner ? <LoadingSpinner /> : 
    <Router>
        <Header ServiceCategoryRes={ServiceCategoryData}/>
        <Routes>
          <Route  path="/*" element={<Main />} />
          <Route  path="about/*" element={<About />} />
          <Route  path="procedure/*" element={<Procedure />} />
          <Route  path="contact/*" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
    }
     
    </>
  );
}

export default App;
