import axios from 'axios';

export const baseUrl = 'https://api.mandarin.weniv.co.kr';

//get
export const getDataBase = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20',
    'Content-Type': 'application/json',
  },
});

// post
export const postDataBase = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'multipart/form-data' },
});
