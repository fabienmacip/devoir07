import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {API_URL, UPLOADS_URL} from '../config';
import FormContact from '../components/forms/formContact';


export default function ContactPage() {

  return(
    <div>
      <h1>Nous contacter</h1>
      <div>
        <FormContact />
      </div> 
    </div>
  )

}
