import { useQuery } from "react-query";
import { fetchMovies } from "../utils/api/movies";

export function useMovies() {
  const query = useQuery("movies", fetchMovies);

  return query;
}
