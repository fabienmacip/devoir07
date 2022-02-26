import {URL_TARIFS} from '../config';
import axios from "axios";

function findAll() {

  //return axios.get(`${URL_TARIFS}/?populate=*`).then((res) => res.data);
  return axios.get(`${URL_TARIFS}`).then((res) => res.data);

}

export default {
  findAll,
};


