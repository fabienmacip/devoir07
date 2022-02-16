import {URL_PHOTOS} from '../config';
import axios from "axios";

function findAll() {

  return axios.get(`${URL_PHOTOS}/?populate=*`).then((res) => res.data);

/*   return fetch(`${URL_PHOTOS}/?populate=*`,
  {
    method: "GET",
    headers: {
      'Accept': 'Application/json'
    }
  })
  .then(res => res.json())
  .catch(error => console.log(error));
 */

  /*   .then(response => {
      //setPhotos(JSON.stringify(response))
      setPhotos(response)
      setIsLoading(false)
  }) */


  
}

function findOne(id) {
  
  return axios.get(`${URL_PHOTOS}/${id}?populate=*`).then((res) => res.data);

/*   return fetch(`${URL_PHOTOS}/${id}?populate=*`,
  {
    method: "GET",
    headers: {
      'Accept': 'Application/json'
    }
  })
    .then(res => res.json())
 */


    /*     .then(res => {
      setPhoto(res)
      setIsLoading(false)
    }) */
}

function getComments(id) {

  // http://localhost:1337/api/photos/2/comments?populate=*

  return axios.get(`${URL_PHOTOS}/${id}/?populate=comments`).then((res) => res.data.data['attributes']['comments'].data);
}

export default {
  findAll,
  findOne,
  getComments,
};


