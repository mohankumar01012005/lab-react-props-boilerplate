import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from './AppClass';
import { imageData }  from './components/DataComponets';

// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <App imageData={imageData} />   
    <AppClass imageArr={imageData} />   
    
);