import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
const db: any = new Dexie("movie");

export async function addToDB(movie?: any) {
  try {
    await db.version(10).stores({
      movie:
        " ++id,adult,backdrop_path,genre_ids,id,media_type,original_language,original_title,overview,popularity,poster_path,release_date,title,video,vote_average,vote_count",
    });
    await db.movie.add(movie);
  } catch (error) {
    console.log("there was an error");
    throw new Error("an error occured");
  }
}
