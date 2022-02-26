import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {API_URL, UPLOADS_URL} from '../config';

export default function HomePage() {





  return(
   <div id="home-div">
     <span id="home-title">Charles Cantin - Photographe</span>
     <img src="../img/photographe.jpg" alt="accueil Charles Cantin" width="100%" height="100%"/>
   </div> 
  )

}
