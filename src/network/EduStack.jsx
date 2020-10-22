import axios from 'axios';

export default axios.create({
    baseURL: 'http://edu-stack.herokuapp.com'
})