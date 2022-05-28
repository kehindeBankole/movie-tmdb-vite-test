import makeApiCall from ".";
import { Genres } from "../../types/genre";


export async function fetchGenre() {
  return await makeApiCall<{genres:Genres[]}>("genre/movie/list");
}
export async function fetchSeriesGenre() {
  return await makeApiCall<{genres:Genres[]}>("genre/tv/list");
}
