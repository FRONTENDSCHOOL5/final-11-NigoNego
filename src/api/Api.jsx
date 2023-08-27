import axios from 'axios';

const createAxiosInstance = token => {
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const instance = axios.create({
    baseURL: baseUrl,
    headers: { 'Content-Type': 'application/json' },
  });

  const imageInstance = axios.create({
    baseURL: baseUrl,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  const getDataBase = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const postDataBase = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return {
    getDataBase,
    instance,
    imageInstance,
    postDataBase,
  };
};

export default createAxiosInstance;
