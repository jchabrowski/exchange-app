import Axios from 'axios';

export const BASE_URL = 'http://api.nbp.pl/api';

export const axiosRequest = (method, endpoint, payload) => {
  const usePayload = !['delete', 'get'].includes(method);

  return Axios[method](endpoint, usePayload ? payload : null);
};