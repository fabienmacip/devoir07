import React, {useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import authAPI from "../services/authAPI"
//import { SocialIcon } from 'react-social-icons';
/* ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body); */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


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
      <img src="../img/logo.jpg" alt="logo Charles Cantin"  />
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
      <FacebookIcon color="primary" sx={{ fontSize: 60}}/>      
      <InstagramIcon color="secondary" sx={{ fontSize: 60}}/>      
      
    </nav>
  )
}


export default NavBar;