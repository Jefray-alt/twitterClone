import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  credentials: 'include',
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return new Promise((resolve, reject) => {
      const config = error.config;
      if (error.response.status === 401 && !config._retry) {
        config._retry = true;
        let res = fetch(`${process.env.REACT_APP_API_URL}/auth/refresh`, {
          credentials: 'include',
          method: 'POST',
        })
          .then(data => data.json())
          .then(res => {
            localStorage.setItem('access_token', res.access_token);
            config.headers.Authorization = `Bearer ${res.access_token}`;
            return instance.request(config);
          });

        resolve(res);
      }
      return Promise.reject(error);
    });
  }
);

export default instance;
