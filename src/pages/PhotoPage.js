import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {UPLOADS_URL} from '../config';
import postsAPI from '../services/postsAPI';

import FormComment from '../components/forms/formComment';

import Skeleton from '@mui/material/Skeleton';
import {Grid,Button} from '@mui/material';

// Imports pour tout ce qui est dans l'élément LIST
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
//import commentsAPI from '../services/commentsAPI';
//import { useNavigate } from 'react-router-dom';



export default function PhotoPage() {
  
  const {id} = useParams()
  const [photoState, setPhoto] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])

  useEffect( () => {
      fetchPhoto(id);
      fetchComments();
  }, []);

  const fetchPhoto = async (id) => {
    const data = await postsAPI.findOne(id);
    setPhoto(data);
    setIsLoading(false);

  }

  const fetchComments = async() => {
    try {
      const data = await postsAPI.getComments(id);
      setComments(data);
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div id="photo-solo">
        <Link to="/photos">
          <Button variant="contained" color="primary">
            
            <span>Back</span>
          </Button>
        </Link>

      <Grid container spacing={2} className="titre-photo">
        <Grid item sm={6}>
        <div className="postImg">
          {isLoading ? <Skeleton variant="text" width={300} height={250} /> : <div><div><img src={UPLOADS_URL + photoState['data']['attributes']['image']['data'][0]['attributes']['formats']['large'].url} alt="photographie" width="100%" /></div><h3>{photoState['data']['attributes'].titre}</h3></div>}
        </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={6}>
          <List>
            {comments.map((comment) => (
              <ListItem alignItems="flex-start" key={comment.id}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={comment['attributes'].pseudo}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        
                      {comment['attributes'].content}
                      </Typography>
                        
                      </React.Fragment>
                    }
                  />
                </ListItem>            
                ))}
          </List>
        </Grid>  
        <Grid item md={6}>
          <FormComment photo={id} fetchComments={fetchComments} />
        </Grid>
      </Grid>
    </div>
  )
}

