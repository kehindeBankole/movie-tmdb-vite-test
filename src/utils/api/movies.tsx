import makeApiCall from ".";
import { Movies } from "../../types/movies";

export async function fetchMovies() {
  return await makeApiCall<{ results: Movies[] }>("trending/movie/week");
}

export async function searchMovie(query: string) {
  return await makeApiCall<{ results: Movies[] }>(
    `search/movie?query=${query}`
  );
}
