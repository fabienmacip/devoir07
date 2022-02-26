import {URL_PHOTOS, URL_CATEGORIES} from '../config';
import axios from "axios";

function findAll() {

  return axios.get(`${URL_PHOTOS}/?populate=*`).then((res) => res.data);

}

function findAllCategories() {

  return axios.get(`${URL_CATEGORIES}`).then((res) => res.data);

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

function create(photo) {
  return axios.post(URL_PHOTOS, photo)
}

export default {
  findAll,
  findAllCategories,
  findOne,
  getComments,
  create
};


