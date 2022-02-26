//import logo from './logo.svg';
//import './App.css';
import React, { version, useState, useEffect } from 'react';
import PhotosPage from './pages/PhotosPage';
import PhotoPage from './pages/PhotoPage';
import LoginPage from './pages/LoginPage';
import AdminPhotosPage from "./pages/AdminPhotosPage";
import authAPI from './services/authAPI';
import Container from '@mui/material/Container';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AuthContext from './contexts/AuthContext';
import NavBar from './components/NavBar';


const routes = [
  {
    path: "/",
    component: PhotosPage
  },
  {
    path: "/photos/:id",
    component: PhotoPage
  },
  {
    path: "/login",
    component: LoginPage
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

  const [isAuthenticated,setIsAuthenticated] = useState(authAPI.isAuthenticated)

  useEffect(() => {
    authAPI.setup()
    authAPI.isAuthenticated()
  })

/*   function PrivateRoute({ children }) {
    const auth = isAuthenticated;
    return auth ? children : <Navigate to="/login" />;
  } */

// <Route path="/admin" element={<PrivateRoute path="/admin" element={<AdminPhotosPage/>} />}></Route>
// <PrivateRoute path="/admin" element={<AdminPhotosPage />}/>
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated
      }}
    >

      <Container>

        <div className="App">
        
        
              <NavBar />
          <Routes>
              <Route path="/" element={<PhotosPage />}></Route>
              <Route path="/photos/:id" element={<PhotoPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <AdminPhotosPage />
                  </PrivateRoute>
                }
                />
              
              <Route render={() => <h2>Page non trouvée</h2>} />
            
          </Routes>
        
        
          
          

        </div>

      </Container>

    </AuthContext.Provider>
    
    
  );
}

export default App;
