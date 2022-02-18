import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://conventus.herokuapp.com/api',
  // baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
