import axios from 'axios';

const instance = axios.create ({
    baseURL : 'https://goods-204a7.firebaseio.com/'
})

export default instance;