import base64 from 'base-64';

export const API_ENDPOINT = 'https://fff-api-heroku.herokuapp.com/food/api';
export const API_VERSION = 'v1.0';
export const API_UN = 'free_food_app';
export const API_PW = 'FreeFoodIsTheBest';

export const API_AUTH_HEADER = {
  Authorization: `Basic ${base64.encode(`${API_UN}:${API_PW}`)}`,
};
