import React, {useState, useContext} from "react"
//import {Link, useNavigate} from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import authAPI from "../services/authAPI"
//import { SocialIcon } from 'react-social-icons';
/* ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body); */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@mui/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Icon, List, ListItem } from "@mui/material";


const navigationLinks = [
  { name: "Home", href:"/", id:1},
  { name: "Galerie", href:"/photos", id:2},
  { name: " Tarifs & Prestations", href:"/tarifs", id:3},
  { name: "Contact", href:"/contact", id:4}
  ];

const useStyles = makeStyles((theme) => ({
  link: {
    paddingRight: 25,
    
  },
  logo: {
    maxWidth: 100,
    marginRight: "auto",
    
  },

}));

const NavBar = () => {
  
  const styles = useStyles();
  const [open,setOpen] = useState(false)


  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <img src="../img/logo.jpg" alt="logo Charles Cantin" className={styles.logo} />
          
            <Hidden smDown>
              {navigationLinks.map((item) => (
                  <Link 
                    key={item.id}
                    className={styles.link}
                    color="textPrimary" 
                    variant="button"
                    underline="none"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
              ))}
              <FacebookIcon color="primary" sx={{ fontSize: 40}}/>      
              <InstagramIcon color="secondary" sx={{ fontSize: 40}}/>      
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={() => setOpen(true)} >
                <MenuIcon />
              </IconButton>
            </Hidden>
        </ToolBar>
      </Container>

      <SwipeableDrawer 
        anchor="right" 
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRightIcon  />
          </IconButton>
        </div>
        <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem key={item.id}>
                <Link 
                  
                  className={styles.link}
                  color="textPrimary" 
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
              ))}
              <ListItem key="facebook">
                <FacebookIcon color="primary" sx={{ fontSize: 40}}/>      
              </ListItem>
              <ListItem key="Insta">
                <InstagramIcon color="secondary" sx={{ fontSize: 40}}/>      
              </ListItem>
          </List>
      </SwipeableDrawer>

    </AppBar>
  )
}

/* 
<img src="../img/logo.jpg" alt="logo Charles Cantin"  />
<FacebookIcon color="primary" sx={{ fontSize: 60}}/>      
<InstagramIcon color="secondary" sx={{ fontSize: 60}}/>      
 */
export default NavBar;