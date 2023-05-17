import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom' //pendiente, estaba armando lsa rutas del front
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store} >
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </Provider>
// )


ReactDOM.render( 
<Provider store={store}>
<BrowserRouter>
<App /> 
</BrowserRouter>
</Provider>,
  document.getElementById('root')
);


