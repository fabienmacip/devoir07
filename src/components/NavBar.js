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
      {isAuthenticated && <Link to="/admin">
        Admin
      </Link>}
      {!isAuthenticated && <Link to="/login">
        Connect
      </Link>}
      {isAuthenticated && <span onClick={handleDisconnect}>Disconnect</span>}
    </nav>
  )
}


export default NavBar;