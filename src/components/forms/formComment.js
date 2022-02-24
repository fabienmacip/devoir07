import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import commentsAPI from "../../services/commentsAPI";

const FormComment = (props) => {

  const [comment, setComment] = useState({photo: props.photo});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const data = commentsAPI.create(comment);
      console.log("DATA");
      console.log(data);
      setComment("");
      props.fetchComments();

    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {}, [comment]);

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
        id="photo"
        name="photo"
        value={props.photo}
        sx={{
          display:"none"
        }}
      />
      <TextField
        required
        id="pseudo"
        label="Pseudo"
        type="text"
        name="pseudo"
        variant="standard"
        onChange={handleChange}
        value={comment.pseudo || ""}
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
        value={comment.content || ""}
      />
   </div>
   <div>
    <Button variant="contained" type="submit">Envoyer</Button>
   </div>

  </form>

  );

};

export default FormComment;