export interface Details {
  adult: boolean;
  backdrop_path: string | undefined;
  belongs_to_collection: null | string;
  budget: number;
  genres: { id: string | number; name: string }[];
  homepage: string;
  id: number | string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: string | number;
    logo_path: string | undefined;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];

  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];

  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
