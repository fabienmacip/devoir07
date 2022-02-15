//import logo from './logo.svg';
//import './App.css';
import React, { version } from 'react';
import PhotosPage from './pages/PhotosPage';
import PhotoPage from './pages/PhotoPage';
import Container from '@mui/material/Container';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const routes = [
  {
    path: "/",
    component: PhotosPage
  },
  {
    path: "/photos/:id",
    component: PhotoPage
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
  
/*   {routes.map((route,i) =>(
    <HandleRoute key={i} {...route} />
  ))}
 */

  return (
    <Container>

      <div className="App">
      
      
        <Routes>
          
            <Route path="/" element={<PhotosPage />}></Route>
            <Route path="/photos/:id" element={<PhotoPage />}></Route>
            <Route render={() => <h2>Page non trouvée</h2>} />

        </Routes>
      
      
        
        

      </div>

    </Container>
    
  );
}

export default App;
