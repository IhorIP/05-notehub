import axios from 'axios';
import type { Movie } from '../types/movie';

interface MoviesHttpResponse {
  results: Movie[];
  total_pages: number;
}

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';

export async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesHttpResponse> {
  const response = await axios.get<MoviesHttpResponse>(SEARCH_URL, {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data;
}
