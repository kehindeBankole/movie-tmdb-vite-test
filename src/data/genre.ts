import { useQuery } from "react-query";
import { fetchGenre, fetchSeriesGenre } from "../utils/api/genre";
import { fetchMovies } from "../utils/api/movies";

export function useGenre() {
  const query = useQuery("genres", fetchGenre);

  return query;
}
export function useSeriesGenre() {
  const query = useQuery("series-genres", fetchSeriesGenre);

  return query;
}
