import axios from 'axios';

export const baseUrl = 'https://api.mandarin.weniv.co.kr/';

export const instance = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const imgInstance = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosPrivate.interceptors.request.use(
//   config => {
//     const token = JSON.pase(localStorage.getItem('auth'));

//     if (!config.headers.Authorization) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${token}`,
//       };
//     }

//     return config;
//   },
//   error => Promise.reject(error),
// );
