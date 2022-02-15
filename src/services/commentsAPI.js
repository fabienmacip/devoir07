import { URL_COMMENTS } from "../config";
import axios from "axios";

function create(comment) {
      console.log("URL : " + URL_COMMENTS);
      console.log("commentaire : " + comment);
      console.log("1 : " + comment.pseudo);
      console.log("2 : " + comment.content);
      
      console.log(JSON.stringify(comment));
    
      


       try {

        return axios.post(URL_COMMENTS, JSON.stringify(comment))
        
      } catch(error) {

        console.log(error.response)

      }
 


    // Simple POST request with a JSON body using fetch
/*               const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(comment)
            };
            fetch(URL_COMMENTS, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
 */


}



export default {
  create,
};