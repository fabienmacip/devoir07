import React, {useEffect, useState} from 'react';
import CardPhoto from './CardPhoto';

import {Grid,Box} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


export default function Photos() {
  
  const [isLoading, setIsLoading] = useState(true)
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    fetch('http://localhost:1337/api/photos/',
    {
      method: "GET",
      headers: {
        'Accept': 'Application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      setTimeout(() => {

/* let result = [];
for(let i in response) {
  result.push([i,response[i]]);
}
console.log("RESULT" + result); */
        setPhotos(response)
        setIsLoading(false)
      }, 2000)

    })
  }, []);

  
  const mesPhotos = [{id:9,titre:"Premier titre de remplacement"},{id:10,titre:"2ème titre de remplacement"}]
  // photos.map(i => <h4>{i.titre}</h4>)}
  // {isLoading ? 'Loading...' : mesPhotos.map((i) => <h4>{i.titre}</h4>)}
//console.log(mesPhotos);
  return (
    <div>
      <h2>
        Liste des photos
      </h2>
      <Grid container spacing={3}>
        
          {isLoading ? (
            <Box>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width="60%" />
              <Skeleton />
            </Box>
          ) : mesPhotos.map((photo) => <CardPhoto photo={photo} key={photo.id}/>)}
        
     </Grid>

      <Grid container spacing={3}>
        <ul>
          {isLoading ? (
            <Box>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width="60%" />
              <Skeleton />
            </Box>
          ) : mesPhotos.map((i) => <li key={i.id}>{i.titre}</li>)}
        </ul>
     </Grid>


     <Grid container spacing={3}>
        <h6>test 1</h6>
        <h6>test 4</h6>
     </Grid>


    </div>
  )
}