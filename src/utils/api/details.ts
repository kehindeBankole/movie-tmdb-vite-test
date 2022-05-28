import makeApiCall from ".";
import { Details } from "../../types/details";
import { Movies } from "../../types/movies";

export async function fetchDetails(id?:string , type?:string ) {
  return await makeApiCall<Details>(`${type}/${id}`);
}
