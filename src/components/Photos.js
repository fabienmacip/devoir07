import React, {useEffect, useState} from 'react';
import CardPhoto from './CardPhoto';

import {Grid,Box} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


export default function Photos() {
  
  const [isLoading, setIsLoading] = useState(true)
  const [photos, setPhotos] = useState(null)
  
  const [lala,setLala] = useState("Lala init")

  useEffect(() => {

    fetch('http://localhost:1337/api/photos/?populate=*',
    {
      method: "GET",
      headers: {
        'Accept': 'Application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
        setPhotos(JSON.stringify(response))
        //setPhotos(response)
        setIsLoading(false)
    })
    .catch(error => console.log(error));
    
  }, []);

  return (
    <div>
      <h2>
        Liste des photos
      </h2>
      <div>{ photos }</div>
      <hr/><hr/>

      <Grid container spacing={3}>
        <ul>
          {isLoading ? (
            <Box>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width="60%" />
              <Skeleton />
            </Box>
          ) : "coucou" }
        </ul>
     </Grid>


    </div>
  )
}

/* && photos.map((i) => <li key={i.id}>{i.titre}</li>) */