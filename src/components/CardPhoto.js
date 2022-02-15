import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {API_URL, UPLOADS_URL} from '../config';
import {Link} from 'react-router-dom';

import {Grid} from '@mui/material';



export default function CardPhoto({photo}) {

  
  

  return (

      <Card sx={{ maxWidth: 345 }} >
        <CardMedia
          component="img"
          height="140"
          image={photo.image !== null ? UPLOADS_URL + photo['attributes']['image']['data'][0]['attributes']['formats']['small'].url : "..."}
          alt={photo['attributes'].titre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {photo['attributes'].titre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            L'identifiant de cette image est : {photo.id}.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          
            <Link to={`/photos/${photo.id}`}>
              <Button size="small">
                Learn More
              </Button>
            </Link>

          
        </CardActions>
      </Card>


  );
}
