import { Movies } from "./movies";

export interface Series {
  backdrop_path: string | undefined;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | undefined;
  vote_average: number;
  vote_count: number;
}
