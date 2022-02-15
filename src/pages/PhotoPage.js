import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {API_URL, UPLOADS_URL} from '../config';
import postsAPI from '../services/postsAPI';

import FormPhoto from '../components/forms/formPhoto';

import Skeleton from '@mui/material/Skeleton';
import {Grid,Button} from '@mui/material';
// Imports pour tout ce qui est dans l'élément LIST
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AiFillCaretLeft } from "react-icons/ai";



export default function PhotoPage() {
  
  const {id} = useParams()
  let [photoState, setPhoto] = useState(null)
  let [isLoading, setIsLoading] = useState(true)

  useEffect( () => {

/*     fetch(`${API_URL}/photos/${id}?populate=*`,
    {
      method: "GET",
      headers: {
        'Accept': 'Application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        setPhoto(res)
        setIsLoading(false)
      })
 */

      fetchPhoto(id);

  })

  const fetchPhoto = async (id) => {
    const data = await postsAPI.findOne(id);
    setPhoto(data);
    setIsLoading(false);

  }

  return (
    <div>

      <nav>
        <Link to="/">
          <Button variant="contained" color="primary">
            <AiFillCaretLeft />
            <span>Back</span>
          </Button>
        </Link>
      </nav>


      <Grid container spacing={2} className="titre-photo">
        <Grid item sm={6}>

        <div className="postImg">
          {isLoading ? <Skeleton variant="text" width={300} height={250} /> : <div><div><img src={UPLOADS_URL + photoState['data']['attributes']['image']['data'][0]['attributes']['formats']['small'].url} alt="photographie" width={300} height={200} /><div>ID : {photoState['data'].id}</div></div><div>TITRE : {photoState['data']['attributes'].titre}</div></div>}
        </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}>



        <Grid item md={6}>
          <FormPhoto />
        </Grid>



        <Grid item md={6}>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>            
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>            
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>                                    
          </List>
        </Grid>        
      </Grid>


    </div>
  )

  
}

/* <div>
{ JSON.stringify(photoState) }
</div> }*/

// Sous le  <div className="postImg">
// {isLoading ? <div><img src={UPLOADS_URL + photoState.image[0].formats.small.url} alt="photographie" /><div>{photoState.image[0].id}</div></div> : <Skeleton variant="text" width={400} height={300} />}