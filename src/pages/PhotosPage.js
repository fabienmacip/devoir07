import React, {useEffect, useState} from 'react';
import CardPhoto from '../components/CardPhoto';

import {Grid} from '@mui/material';
//import Skeleton from '@mui/material/Skeleton';

import PhotosContentLoader from "../components/loaders/PhotosContentLoader";

import postsAPI from '../services/postsAPI';

export default function PhotosPage() {
  
  const [isLoading, setIsLoading] = useState(true)
  const [photos, setPhotos] = useState(null)
  
  

  useEffect(() => {

/*     fetch('http://localhost:1337/api/photos/?populate=*',
    {
      method: "GET",
      headers: {
        'Accept': 'Application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
        //setPhotos(JSON.stringify(response))
        setPhotos(response)
        setIsLoading(false)
    })
    .catch(error => console.log(error));
 */    

    fetchAllPhotos();
  }, []);

  const fetchAllPhotos = async () => {
    const data = await postsAPI.findAll();
    setPhotos(data);
    setIsLoading(false);

  }

  return (
    <div>
      <h2>
        Liste des photos
      </h2>
      <div>{ /* JSON.stringify(photos) */ }</div>
      
      <Grid container spacing={3}>
        
          {isLoading ? (<PhotosContentLoader />) : photos['data'].map((i) => <Grid item key={i.id}><CardPhoto photo={i}/></Grid>)}
        
     </Grid>


    </div>
  )
}

/* {i['attributes'].titre} */


