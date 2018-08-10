import axios from 'axios';
import { URL } from '@/config';

const baseURL = URL.baseURL;
const instance = axios.create({
  baseURL,
});

// 中间件
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  const newConfig = config;
  newConfig.headers.Authorization = sessionStorage.getItem('Authorization');
  return newConfig;
}, (error) => {
  // Do something with request error
  // eslint-disable-next-line no-console
  console.log(error);
  Promise.reject(error);
});

function GET(url, params, func, errFunc) {
  instance.get(url, params)
    .then((response) => {
      func(response);
    })
    .catch((error) => {
      errFunc(error);
    });
}
function DELETE(url, params, func, errFunc) {
  instance.delete(url, params)
    .then((response) => {
      func(response);
    })
    .catch((error) => {
      errFunc(error);
    });
}
function POST(url, data, func, errFunc) {
  instance.post(url, data)
    .then((response) => {
      func(response);
    })
    .catch((error) => {
      errFunc(error);
    });
}

function PUT(url, data, func, errFunc) {
  instance.post(url, data)
    .then((response) => {
      func(response);
    })
    .catch((error) => {
      errFunc(error);
    });
}

export { GET, POST, DELETE, PUT };
