import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';

//import from "https://www.google.com/recaptcha/api.js";

function FormContact() {
  
  const [state, handleSubmit] = useForm("mwkybeyw");
  if (state.succeeded) {
      return <p>Merci pour votre message, nous vous répondrons dans les meilleurs délais.</p>;
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            id="email"
            label="Votre adresse mail"
            type="email"
            name="email"
            variant="standard"
          />          
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        
        </div>

        <div>
          <TextField
            required
            id="message"
            label="Votre message ici..."
            name="message"
            multiline
            rows={8}
            variant="standard"
          />



          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div>
          <Button variant="contained" type="submit" disabled={state.submitting}>Envoyer</Button>
        </div>



    </form>
  );

/*     <div className="g-recaptcha" data-sitekey="6Lffx6EeAAAAAHdroaNrFLR7qCjkLinHsBBsPxeA"></div> */

/* Clé du site :
6Lffx6EeAAAAAHdroaNrFLR7qCjkLinHsBBsPxeA

Clé secrète :
6Lffx6EeAAAAAAKhyot9I-Bszvt6xBn0DtofDXz9
 */

/*   <label htmlFor="email">
  Email Address
</label>
<input
  id="email"
  type="email" 
  name="email"
/>
 */

{/* <textarea
id="message"
name="message"
/>
 */}


/*  <button type="submit" disabled={state.submitting}>
 Submit
</button>
 */


}

export default FormContact;