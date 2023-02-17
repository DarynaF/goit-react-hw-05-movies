import axios from 'axios';

const API_KEY = 'b77b3068ddcc2ce3ea23003328032394';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };

export async function getTranding() {
  const { data } = await axios.get('/trending/movie/week');
  return data;
}
export async function getMovieByQuery(query, page = 1) {
  const params = { query, language: 'en-US', page };
  const { data } = await axios.get('/search/movie', { params });
  return data;
}
export async function getMoviesById(id) {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
}
export async function getCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
}
export async function getReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
}
