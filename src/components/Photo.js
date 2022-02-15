import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {API_URL, UPLOADS_URL} from '../config';
import Skeleton from '@mui/material/Skeleton';
import {Grid,Button} from '@mui/material';
import { AiFillCaretLeft } from "react-icons/ai";


export default function Photo() {
  
  const {id} = useParams()
  let [photoState, setPhoto] = useState(null)
  let [isLoading, setIsLoading] = useState(true)

  useEffect( () => {

    fetch(`${API_URL}/photos/${id}?populate=*`,
    {
      method: "GET",
      headers: {
        'Accept': 'Application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        setPhoto(res)
        setIsLoading(false)
      })
  })

  return (
    <div>

      <nav>
        <Link to="/">
          <Button variant="contained" color="primary">
            <AiFillCaretLeft />
            <span>Back</span>
          </Button>
        </Link>
      </nav>


      <Grid container spacing={2}>
        <Grid item sm={6}>
        <div>
          {/* JSON.stringify(photoState) */}
        </div>
        <div className="postImg">
          {isLoading ? <Skeleton variant="text" width={300} height={250} /> : <div><div><img src={UPLOADS_URL + photoState['data']['attributes']['image']['data'][0]['attributes']['formats']['small'].url} alt="photographie" width={300} height={200} /><div>ID : {photoState['data']['attributes']['image']['data'][0].id}</div></div><div>TITRE : {photoState['data']['attributes'].titre}</div></div>}
        </div>
        </Grid>
      </Grid>

    </div>
  )

  
}

// Sous le  <div className="postImg">
// {isLoading ? <div><img src={UPLOADS_URL + photoState.image[0].formats.small.url} alt="photographie" /><div>{photoState.image[0].id}</div></div> : <Skeleton variant="text" width={400} height={300} />}