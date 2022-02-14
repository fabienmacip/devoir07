import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {API_URL, UPLOADS_URL} from '../config';
import Skeleton from '@mui/material/Skeleton';
import {Grid,Button} from '@mui/material';
import { AiFillCaretLeft } from "react-icons/ai";


export default function Photo() {
  
  const {id} = useParams()
  let [photoState, setPhoto] = useState(null)
  let [isLoading, setIsLoading] = useState(false)

  useEffect( () => {

    fetch(`${API_URL}/photos/${id}?populate=*`)
      .then(res => res.json())
      .then(res => {
        setPhoto(res)
        setIsLoading(true)
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
        <div className="postImg">
          {isLoading ? <div><img src={UPLOADS_URL + photoState.image[0].formats.small.url} alt="photographie" /><div>{photoState.image[0].id}</div></div> : <Skeleton variant="text" width={400} height={300} />}
        </div>
        </Grid>
      </Grid>

    </div>
  )
}