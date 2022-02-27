import React, {useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import authAPI from "../services/authAPI"
//import { SocialIcon } from 'react-social-icons';
/* ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body); */
//import FacebookIcon from '@mui/icons-material/Facebook';


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
      <img src="../img/logo.jpg" alt="logo Charles Cantin" width="100%" height="100%"/>
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