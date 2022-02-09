/* import React from "react";


export default function CardPhoto({photo}) {
  return (
    <h2>{photo.titre}</h2>
  )
}


 */





import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {API_URL} from '../config';

export default function CardPhoto({photo}) {
  
  // Remplacer dans CardMedia->image
  // image={photo.image !== null ? API_URL + photo.image[0].formats.small.url : "..."}

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={photo.src !== null ? photo.src : "..."}
        alt={photo.titre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {photo.titre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          L'identifiant de cette image est : {photo.id}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}