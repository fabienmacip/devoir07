import React, {useEffect, useState} from 'react';
import CardPhoto from './CardPhoto';

import {Grid,Box} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


export default function Photos() {
  
  const [isLoading, setIsLoading] = useState(true)
  const [photos, setPhotos] = useState(null)
  

  useEffect(() => {

    // TEST SOLUTION
    
    // FIN TEST

    fetch('http://localhost:1337/api/photos/?populate=*',
    {
      method: "GET",
      headers: {
        'Accept': 'Application/json'
      }
    })
    .then(res => res.json())
    .then(response => {

      console.log("************ REPONSE PHOTOS : ")
      console.log(response)
      console.log("************ FIN RESPONSE")

      response = JSON.parse(JSON.stringify(response))
      
      let response2 = []
      for (let i in response) {
        response2.push(response[i])
      }
            
      setTimeout(() => {

        setPhotos(response2)
        setIsLoading(false)
        
      }, 1200)

    })
  }, []);

  

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
          ) : photos && photos.map((j) => <CardPhoto photo={j} key={j.id}/>)}
        
     </Grid>

      <Grid container spacing={3}>
        <ul>
          {isLoading ? (
            <Box>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width="60%" />
              <Skeleton />
            </Box>
          ) : photos && photos.map((i) => <li key={i.id}>{i.titre}</li>)}
        </ul>
     </Grid>


     <Grid container spacing={3}>
        <h6>test 1</h6>
        <h6>test 4</h6>
     </Grid>


    </div>
  )
}