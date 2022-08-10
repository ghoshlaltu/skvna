

import React, { Component, useState, useEffect } from 'react'
import Slider from './slider';
import Home from './home';
import LoadingSpinner from './../components/LoadingSpinner';

function Main() {
    
    const [spinner, setSpinner] = useState(false);
    const [userData,setUserData]=useState([])

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
        // console.log('Success:', result);
        
        setUserData(result.data);
        setSpinner(false);
        
        setTimeout(() => {
        //simulates an api call to the backend
        
    }, 1000);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    },
    []);
    return (
        <>
        {spinner ? <LoadingSpinner /> : "" }
        <Slider/>
        <Home />
        </>
    );
}

export default Main