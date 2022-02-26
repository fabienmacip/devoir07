import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import postsAPI from '../services/postsAPI';


const AdminPhotosPage = () => {

  const [credentials, setCredentials] = useState({
    titre: "",
    image: ""
  })

  const handleChange = ({currentTarget}) => {
    const {value,name} = currentTarget // raccourci pour =>   const value = currentTarget.value      const name = currentTarget.name
    setCredentials({
      ...credentials, // pour conserver la valeur précédente
      [name]: value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      await postsAPI.create(credentials);
    } catch(error) {
      console.log(error);
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <div>
      <TextField 
          id="titre"
          label="titre"
          type="text"
          name="titre"
          onChange={handleChange}
        />
      </div>
      <div>
      <TextField 
          id="image"
          label="image"
          type="text"
          name="image"
          onChange={handleChange}
        />
      </div>
      <div>
        <Button variant="contained" type="submit">Envoyer</Button>
      </div>

    </form>
  );
}

export default AdminPhotosPage;