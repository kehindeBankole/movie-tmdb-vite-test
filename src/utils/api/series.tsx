import makeApiCall from ".";
import { Series } from "../../types/series";

export async function fetchSeries() {
  return await makeApiCall<{ results: Series[] }>("tv/popular");
}
