import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom' //pendiente, estaba armando lsa rutas del front


ReactDOM.render( 
<BrowserRouter>
<App /> 
</BrowserRouter>,
  document.getElementById('root')
);


