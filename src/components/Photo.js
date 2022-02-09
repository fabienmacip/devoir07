import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {API_URL} from '../config';
import Skeleton from '@mui/material/Skeleton';
import {Grid,Button} from '@mui/material';
import { AiFillCaretLeft } from "react-icons/ai";


export default function Photo() {
  
  const {id} = useParams()
  let [photoState, setPhoto] = useState(null)
  let [isLoading, setIsLoading] = useState(false)

  useEffect( () => {
    console.log("ID : " + id);
    fetch(`${API_URL}/photos/${id}`)
      .then(res => res.json())
      .then(res => {
        setPhoto(res)
        setIsLoading(true)
      })
  })

//photoState.image[0].formats.small.url

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
        <Grid item sm="6">
        <div className="postImg">
          {isLoading ? <img src={API_URL + photoState.image.formats.small.url} alt="photographie" /> : <Skeleton variant="text" width={400} height={300} />}
        </div>


        </Grid>
        <Grid item sm="6">
          <img src='{isLoading ? photoState.url : <Skeleton variant="rect" width={210} height={118}/>}' alt="photographie"/>
          <h3>{isLoading ? photoState.titre : <Skeleton variant="text" width={400} height={300} />}</h3>
        </Grid>
      </Grid>

    </div>
  )
}