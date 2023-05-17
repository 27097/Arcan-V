import { Home, Detail, Form, Landing } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from 'react-router-dom'



function App() {
  
  let location = useLocation()
  
  return (
    <div className="App">
      {/* dessaparece la NavBar en '/' */}
     {location.pathname !== '/' && <NavBar/>}    
      
      
      <Route exact path ='/'  >
      <Landing />
      </Route>

      <Route exact path ='/home'  >
          <Home />
      </Route>

      <Route exact path ='/detail'  >
         <Detail />
      </Route>


      <Route exact path ='/create'  >
         <Form />
      </Route>

      {/* <Route exact path='/' component={Landing} />
      OTRA FORMAS DE CREAR RUTAS
      <Route exact path='/' render={()=> <Landing /> } /> */}


     
      
    </div>
  );
}

export default App;
