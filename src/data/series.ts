import { useQuery } from "react-query";
import { fetchSeries } from "../utils/api/series";

export function useSeries() {
  const query = useQuery("series", fetchSeries);

  return query;
}
