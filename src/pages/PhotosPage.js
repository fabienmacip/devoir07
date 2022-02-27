import React, {useEffect, useState} from 'react';
import CardPhoto from '../components/CardPhoto';

import {Button} from '@mui/material';

import {Grid} from '@mui/material';
//import Skeleton from '@mui/material/Skeleton';

import PhotosContentLoader from "../components/loaders/PhotosContentLoader";

import postsAPI from '../services/postsAPI';



export default function PhotosPage() {
  
  const [isLoading, setIsLoading] = useState(true)
  const [photos, setPhotos] = useState(null)
  const [categories,setCategories] = useState(null)

  // Pour n'afficher qu'une catégorie de photos : mariage, bébé, ou autre...
  const [filtreCategories, setFiltreCategories] = useState(0)

// Créer filtre pour n'afficher que les photos dont le className est cat2 ou cat4, etc


  useEffect(() => {
    fetchAllPhotos();
  }, []);

  const fetchAllPhotos = async () => {
    // data = tuples des photos
    const data = await postsAPI.findAll();
    // data2 = tuples des catégories
    const data2 = await postsAPI.findAllCategories();

    setPhotos(data);
    setCategories(data2);
    
    setIsLoading(false);
  }

  const handleFiltreCategorie = (e) => {
    setFiltreCategories(e.target.id)
    
  }

  

  return (
    <div>
      <h2>
        GALERIE
      </h2>
      <div id="categories-div"><ul id="categories-nav">
      <li className='categories-nav' key={0}><Button variant="contained" type="submit" id={0} onClick={handleFiltreCategorie}>Tout</Button></li>
        {isLoading ? "..." : categories['data'].map((c) => <li className='categories-nav' key={c.id}>
      <Button variant="contained" type="submit" id={c.id} onClick={handleFiltreCategorie}>{c['attributes'].titre}</Button></li>)}</ul></div>
      


      <Grid container spacing={3}>
        
          {isLoading ? (<PhotosContentLoader />) : photos['data'].filter((i) => {
            return filtreCategories != 0 ? i['attributes']['categorie']['data'].id == filtreCategories : i['attributes']['categorie']['data'].id > 0
          }).map((i) => <Grid item key={i.id} className={`cat${i['attributes']['categorie']['data'].id}`}><CardPhoto photo={i}/></Grid>)}
        
     </Grid>


    </div>
  )

  /* {isLoading ? (<PhotosContentLoader />) : photos['data'].map((i) => <Grid item key={i.id} className={`cat${i['attributes']['categorie']['data'].id}`}><CardPhoto photo={i}/></Grid>)} */
}

/* {i['attributes'].titre} */


