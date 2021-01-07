import axios from 'axios';
import { URL, URL_BASE } from '@/configs/config';

const baseURL = `${URL}${URL_BASE}`;
const webservice = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
export const setToken = token => {
  webservice.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export default webservice;
