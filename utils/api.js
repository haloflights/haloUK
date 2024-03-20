utils/api.js
import axios from 'axios';

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports',
  params: {
    lat: '19.242218017578125',
    lng: '72.85846156046128'
  },
  headers: {
    'X-RapidAPI-Key': 'ecfdb5e4c6mshee5cc7f956b47eap1e9d37jsn9bd8b3d22f68',
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export default api;
