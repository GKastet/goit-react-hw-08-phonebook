import axios from 'axios';

const baseUrl = 'https://connections-api.herokuapp.com'

export const instance = axios.create({
    baseURL: baseUrl
  });

