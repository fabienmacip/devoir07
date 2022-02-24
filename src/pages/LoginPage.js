import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import authAPI from '../services/authAPI';

const LoginPage = () => {
  
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: ""
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
    try {
      await authAPI.authenticate(credentials)
    } catch(error) {
      console.log(error)
    }
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <TextField 
          id="identifier"
          label="Username"
          type="text"
          name="identifier"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField 
          id="password"
          label="Password"
          type="text"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginPage;
  