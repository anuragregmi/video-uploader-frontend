const token = window.localStorage.getItem('authToken')
const $axios = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: token ? { 'Authorization': `token ${token}` } : {}
});