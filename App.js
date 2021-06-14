// import {useState,useEffect} from 'react';
import './App.css';
// import {useEffect,useState} from 'react';
import BarChart from './components/BarChart';

function App(){
  return(
    <div className='container'>
      <div className='header'>
        Welcome to Splunk Dashboard
      </div>
      <div className='graphBody'>
        <BarChart/>
      </div>
      <div className='footer'>
        built with React 
      </div>
    </div>
  )
}

export default App