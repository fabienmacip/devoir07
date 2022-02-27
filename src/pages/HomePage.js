import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {API_URL, UPLOADS_URL} from '../config';

import Skeleton from '@mui/material/Skeleton';
import postsAPI from '../services/postsAPI';

export default function HomePage() {


  const [homePhoto, setHomePhoto] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
      fetchHomePhoto();
  }, []);

  const fetchHomePhoto = async () => {
    const data = await postsAPI.findHomePhoto();
    setHomePhoto(data);
    setIsLoading(false);

  }




  return(
   <div id="home-div">
     <span id="home-title">Charles Cantin - Photographe</span>

     {isLoading ? <Skeleton variant="text" width="100%" height="100%" /> : <div><div><img src={UPLOADS_URL + homePhoto['data']['attributes']['photo']['data']['attributes']['formats']['large'].url} alt="Accueil Charles Cantin" width="100%" height="100%"/></div></div>}

     
   </div> 
  )

}
