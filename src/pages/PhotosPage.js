import React, {useEffect, useState} from 'react';
import CardPhoto from '../components/CardPhoto';

import {Grid} from '@mui/material';
//import Skeleton from '@mui/material/Skeleton';

import PhotosContentLoader from "../components/loaders/PhotosContentLoader";

import postsAPI from '../services/postsAPI';



export default function PhotosPage() {
  
  const [isLoading, setIsLoading] = useState(true)
  const [photos, setPhotos] = useState(null)
  const [categories,setCategories] = useState(null)

// Créer filtre pour n'afficher que les photos dont le className est cat2 ou cat4, etc


  useEffect(() => {
    fetchAllPhotos();
  }, []);

  const fetchAllPhotos = async () => {
    const data = await postsAPI.findAll();
    const data2 = await postsAPI.findAllCategories();
    setPhotos(data);
    setCategories(data2);
    
    setIsLoading(false);
  }


  return (
    <div>
      <h2>
        Liste des photos
      </h2>
      <div><ul id="categories-nav">{isLoading ? "..." : categories['data'].map((c) => <li className='categories-nav' key={c.id}>{c['attributes'].titre}</li>)}</ul></div>
      


      <Grid container spacing={3}>
        
          {isLoading ? (<PhotosContentLoader />) : photos['data'].map((i) => <Grid item key={i.id} className={`cat${i['attributes']['categorie']['data'].id}`}><CardPhoto photo={i}/></Grid>)}
        
     </Grid>


    </div>
  )
}

/* {i['attributes'].titre} */


