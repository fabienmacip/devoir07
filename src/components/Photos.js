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
      console.log(response)
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

  
  const mesPhotos = [{id:1,titre:"Mariage 1",src:"https://media.istockphoto.com/photos/happy-bride-and-groom-picture-id872389086?k=20&m=872389086&s=612x612&w=0&h=MSNgcbR5rvqFbk7evOQ9KQKDDyzAWDVU6GyOaadzPdI="},
  {id:2,titre:"Mariage plage",src:"https://media.istockphoto.com/photos/wedding-engagement-ceremony-with-pastor-happy-multiethnic-couple-in-picture-id1286140637?k=20&m=1286140637&s=612x612&w=0&h=3pbjANSdxaOPXoAREHiRXLjEHQ6mwTnNm36HoqNN-_M="},
  {id:3,titre:"Les mariés",src:"https://media.istockphoto.com/photos/young-newlywed-couple-celebrating-on-the-beach-picture-id1286754402?k=20&m=1286754402&s=612x612&w=0&h=nJZuy-ozJ1jnYr3wkiBlgg5F4RTIAoQC-TAPOh-yxa8="},
  {id:4,titre:"A la plage",src:"https://media.istockphoto.com/photos/closeup-of-happy-stylish-newlywed-bride-and-groom-hugging-picture-id596803892?k=20&m=596803892&s=612x612&w=0&h=5BQtvyR1DLcfw_TRLzQH9uRFKefawZHAfJSu_BSHy4c="},
  {id:5,titre:"Sur le sable",src:"https://media.istockphoto.com/photos/just-married-couple-embraced-picture-id857404618?k=20&m=857404618&s=612x612&w=0&h=SB4FjHDRC5HR0vFxVTfFvQ6LeTIA2x41-Zp_IJlgpg0="}
]
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