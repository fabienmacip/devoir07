import * as React from 'react';
import Typography from '@mui/material/Typography';
import {API_URL, UPLOADS_URL} from '../config';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
//import Typography from '@mui/material/Typography';


export default function TarifLine({tarif}) {

  
  

  return (
    <ListItemText
      primary={tarif['attributes'].titre + " - Prix : " + tarif['attributes'].tarif}
      secondary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {tarif['attributes'].description}
          </Typography>
          
        </React.Fragment>
      }
    />
  );
}
