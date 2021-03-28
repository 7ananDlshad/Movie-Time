const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = '542003918769df50083a13c415bbc602';

export function constructUrl(path, query) {
  const queryText = query ? `&query=${query}` : '';
  return `${TMDB_BASE_URL}/${path}?api_key=${API_KEY}` + queryText;
}
