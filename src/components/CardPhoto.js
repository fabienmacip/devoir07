import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {UPLOADS_URL} from '../config';
import {Link} from 'react-router-dom';

//import {Grid} from '@mui/material';



export default function CardPhoto({photo}) {

  
  

  return (

      <Card sx={{ width: 250 }} >

        <CardMedia
          component="img"
          height="140"
          image={photo.image !== null ? UPLOADS_URL + photo['attributes']['image']['data'][0]['attributes']['formats']['small'].url : "..."}
          alt={photo['attributes'].titre}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {photo['attributes'].titre}
          </Typography>
        </CardContent>

        <CardActions>
            <Link to={`/photos/${photo.id}`}>
              <Button size="small">
                Learn More
              </Button>
            </Link>
        </CardActions>

      </Card>


  );
}
