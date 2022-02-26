import React, {useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import authAPI from "../services/authAPI"

const NavBar = () => {
  
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleDisconnect = () => {
    authAPI.logout()
    setIsAuthenticated(false)
    navigate("/")
  }
  
  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/photos">
        Galerie
      </Link>
      <Link to="/tarifs">
        Tarifs & Prestations
      </Link>
      <Link to="/contact">
        Contact
      </Link>
      
      
    </nav>
  )
}


export default NavBar;