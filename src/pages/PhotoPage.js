import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {API_URL, UPLOADS_URL} from '../config';
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
import { AiFillCaretLeft } from "react-icons/ai";
import commentsAPI from '../services/commentsAPI';



export default function PhotoPage() {
  
  const {id} = useParams()
  const [photoState, setPhoto] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])
// {"id":"13","pseudo":"Mitch","content":"test direct"},{"id":"208","pseudo":"Peugeot","content":"Le state COMMENT ne se met pas bien à jour."}
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
      fetchComments();
      
  }, []);

  const fetchPhoto = async (id) => {
    const data = await postsAPI.findOne(id);
    setPhoto(data);
    setIsLoading(false);

  }

  const fetchComments = async() => {
    
    try {
      //const data = await commentsAPI.findAll();
      const data = await postsAPI.getComments(id);
      setComments(data);
/*       console.log("DATA");
      console.log(data);
      console.log("COMMENTS");
      console.log(comments); */

    } catch(error) {

      console.log(error)
    }
    
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
          {isLoading ? <Skeleton variant="text" width={300} height={250} /> : <div><div><img src={UPLOADS_URL + photoState['data']['attributes']['image']['data'][0]['attributes']['formats']['medium'].url} alt="photographie" width={400} height={300} /><div>ID : {photoState['data'].id}</div></div><div>TITRE : {photoState['data']['attributes'].titre}</div></div>}
        </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}>

        <Grid item md={6}>
          <FormComment photo={id} fetchComments={fetchComments} />
        </Grid>



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
      </Grid>


    </div>
  )

  
}

/* <div>
{ JSON.stringify(photoState) }
</div> }*/

// Sous le  <div className="postImg">
// {isLoading ? <div><img src={UPLOADS_URL + photoState.image[0].formats.small.url} alt="photographie" /><div>{photoState.image[0].id}</div></div> : <Skeleton variant="text" width={400} height={300} />}