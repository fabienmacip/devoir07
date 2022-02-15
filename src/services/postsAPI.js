import {URL_PHOTOS} from '../config';

function findAll() {
  return fetch(`${URL_PHOTOS}/?populate=*`,
  {
    method: "GET",
    headers: {
      'Accept': 'Application/json'
    }
  })
  .then(res => res.json())
/*   .then(response => {
      //setPhotos(JSON.stringify(response))
      setPhotos(response)
      setIsLoading(false)
  }) */
  .catch(error => console.log(error));
  
}

function findOne(id) {
  
  return fetch(`${URL_PHOTOS}/${id}?populate=*`,
  {
    method: "GET",
    headers: {
      'Accept': 'Application/json'
    }
  })
    .then(res => res.json())
/*     .then(res => {
      setPhoto(res)
      setIsLoading(false)
    }) */
}

export default {
  findAll,
  findOne,
};


