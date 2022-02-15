import React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';


const FormPhoto = (props) => {

  return (
    <form>
    <div>
      <TextField
        required
        id="pseudo"
        label="Pseudo"
        type="text"
        variant="standard"

      />          
    </div>
    <div>
      <TextField
        required
        id="standard-multiline-static"
        label="Votre commentaire"
        multiline
        rows={4}
        variant="standard"
      />
   </div>
   <div>
    <Button variant="contained">Contained</Button>
   </div>

  </form>

  );

};

export default FormPhoto;