const token = window.localStorage.getItem('authToken')
const $axios = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: token ? { 'Authorization': `token ${token}` } : {}
});

// Add a response interceptor
$axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
        window.location.href = `/login?next=${window.location.pathname}`
    }
    return Promise.reject(error);
  });