//import logo from './logo.svg';
//import './App.css';
import React, { version } from 'react';
import Photos from './components/Photos';
import Photo from './components/Photo';
import Container from '@mui/material/Container';
import {Route, Routes} from 'react-router-dom';

const routes = [
  {
    path: "/",
    component: Photos
  },
  {
    path: "/photos/:id",
    component: Photo
  }
];

const HandleRoute = route => (
  <Route path={route.path} render={ props => (
    <route.component {...props} />
  )} />
);
/* 
<Route path="/" exact>
<Photos />
</Route>
<Route path="/photos/:id">
<Photo />
</Route>
 */

function App() {
  
  return (
    <Container>

      <div className="App">
        <Routes>
          
            {routes.map((route,i) =>(
              <HandleRoute key={i} {...route} />
            ))}

            <Route render={() => <h2>Page non trouvée</h2>} />

        </Routes>
        
        

      </div>

    </Container>
    
  );
}

export default App;
