import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import commentsAPI from "../../services/commentsAPI";

const FormComment = (props) => {

  const [comment, setComment] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const data = commentsAPI.create(comment);
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = ({currentTarget}) => {
    /* const value = currentTarget.value;
    const name = currentTarget.name; */
    const {name, value} = currentTarget;
    setComment({
      ...comment,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit} method="post">
    <div>
      <TextField
        required
        id="pseudo"
        label="Pseudo"
        type="text"
        name="pseudo"
        variant="standard"
        onChange={handleChange}
      />          
    </div>
    <div>
      <TextField
        required
        id="content"
        label="Votre commentaire"
        name="content"
        multiline
        rows={4}
        variant="standard"
        onChange={handleChange}
      />
   </div>
   <div>
    <Button variant="contained" type="submit">Contained</Button>
   </div>

  </form>

  );

};

export default FormComment;