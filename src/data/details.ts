import { useQuery } from "react-query";
import { fetchDetails } from "../utils/api/details";
import { fetchMovies } from "../utils/api/movies";

export function useDetails(id?:string , type?:string  ) {
  const query = useQuery("details", ()=>fetchDetails(id , type) , {
      refetchOnMount:true
  });

  return query;
}
