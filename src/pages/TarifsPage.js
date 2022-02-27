import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import {API_URL, UPLOADS_URL} from '../config';

import tarifsAPI from '../services/tarifsAPI';
import TarifsContentLoader from "../components/loaders/TarifsContentLoader";
import TarifLine from '../components/TarifLine';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



export default function TarifsPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [tarifs, setTarifs] = useState(null)

  useEffect(() => {

    fetchAllTarifs();
  }, []);

  const fetchAllTarifs = async () => {
    const data = await tarifsAPI.findAll();
    setTarifs(data);
    setIsLoading(false);
//console.log(data)
  }



  return(
   <div>
     <h1>
       Tarifs & Prestations
     </h1>


    <List>
    {isLoading ? (<TarifsContentLoader />) : tarifs['data'].map((i) => <div key={i.id}><ListItem className="li-tarif" ><TarifLine tarif={i}/></ListItem><Divider variant="inset" className="tarifs-divider"/></div>)}
    </List>

      


   </div> 
  )

}
