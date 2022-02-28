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
import { List, ListItem } from "@mui/material";


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
  avatar: {
    marginRight: "auto",
    color: "white",
    backgroundColor: "black",
    borderRadius: 0,
    height: 30,
    border: "2px solid gray",
    borderLeft: "12px solid transparent",
    borderRight: "12px solid transparent",
  },

}));

const NavBar = () => {
  
  const styles = useStyles();
  const [open,setOpen] = useState(false)


  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Avatar className={styles.avatar}>P</Avatar>
            <Hidden xsDown>
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
            </Hidden>
            <Hidden smUp>
              <IconButton>
                <MenuIcon onClick={() => setOpen(true)} />
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
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem>
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
              </ListItem>
              ))}
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