import React, {useContext} from "react";
import AuthContext from "../contexts/AuthContext";
import {useNavigate, Navigate, Route} from "react-router-dom";
//import AdminPhotosPage from "../pages/AdminPhotosPage";

//const PrivateRoute = ({path, component}) => {
  function PrivateRoute ({children}) {
  
  const {isAuthenticated} = useContext(AuthContext)
  const {location} = useNavigate()

  

  if(isAuthenticated) {
    //return <Route path={path} component={component}></Route>
    return children
  } else if (!isAuthenticated && location.pathname === "/login") {
    //} else if (!isAuthenticated && location.pathname === "/login") {
    return <Navigate to="/login" />
  } else {
    return <Navigate to="/" />
  }


}

export default PrivateRoute;