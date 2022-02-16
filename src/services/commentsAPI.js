import { URL_COMMENTS, URL_PHOTOS } from "../config";
import axios from "axios";

function create(comment) {
      console.log("URL : " + URL_COMMENTS);
      console.log("commentaire : " + comment);
      console.log("1 : " + comment.pseudo);
      console.log("2 : " + comment.content);
      console.log(JSON.stringify(comment));
    
       try {

        return axios.post(URL_COMMENTS, (comment))
        
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

// id est l'id de la photo (du post)
function findAll(id) {
 // "http://localhost:1337/api/photos/:id/?populate=comments"
 
 console.log("requete comments");
 console.log(URL_PHOTOS + "/" + id + "/?populate=comments");

  return axios.get(URL_PHOTOS + "/" + id + "/?populate=comments").then((res) => res.data);
}


export default {
  create,
  findAll
};