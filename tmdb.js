const axios = require('axios');
require('dotenv').config();

const BASE_URL = 'https://api.themoviedb.org/3';

const endpoints = {
  playing: 'movie/now_playing',
  popular: 'movie/popular',
  top: 'movie/top_rated',
  upcoming: 'movie/upcoming',
};

async function fetchMovies(type) {
  const endpoint = endpoints[type];
  if (!endpoint) throw new Error('Invalid type');

  const response = await axios.get(`${BASE_URL}/${endpoint}`, {
    params: {
      api_key: process.env.TMDB_API_KEY,
      language: 'en-US',
      page: 1,
    },
  });

  return response.data.results;
}

module.exports = { fetchMovies };
