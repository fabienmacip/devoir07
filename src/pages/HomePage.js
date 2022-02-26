import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {API_URL, UPLOADS_URL} from '../config';

export default function HomePage() {

  return(
   <div>
     <img src="../img/photographe.jpg" alt="accueil Charles Cantin"/>
   </div> 
  )

}
