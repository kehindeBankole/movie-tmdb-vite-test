import React, { useEffect, useMemo, useState } from "react";
import Error from "../../components/error";
import Loading from "../../components/loading";
import MovieCard from "../../components/move-card";
import SeriesCard from "../../components/series-card";
import { useGenre, useSeriesGenre } from "../../data/genre";
import { useMovies } from "../../data/movies";
import { useSeries } from "../../data/series";
import { useDebounce } from "react-use";
import { searchMovie } from "../../utils/api/movies";
import { Movies } from "../../types/movies";
import { addToDB } from "../../utils";

function Home() {
  const { data: results, isLoading, isError } = useMovies();
  const {
    data: series,
    isLoading: seriesLoading,
    isError: seriesError,
  } = useSeries();
  const { data: genres } = useGenre();
  const { data: seriesGenre } = useSeriesGenre();

  const [input, setInput] = useState("");
  const [searched, setSearched] = useState<Movies[]>([]);

  const [, search] = useDebounce(
    async () => {
      if (input) {
        let da = await searchMovie(input);
        setSearched(da.results);
      }
    },
    2000,
    [input]
  );

  const [selectedGenre, setSelectedGenre] = useState<any>("");
  const [selectedSeriesGenre, setSelectedSeriesGenre] = useState<any>("");

  const filteredMemes = useMemo(() => {
    if (selectedGenre) {
      return results?.results.filter(
        (item) => item.genre_ids.includes(selectedGenre) && item
      );
    }
    if (input && searched.length !== 0) {
      return searched;
    }
    return results?.results;
  }, [results, selectedGenre, searched, input]);

  const filteredSeries = useMemo(() => {
    if (selectedSeriesGenre) {
      return series?.results.filter(
        (item) => item.genre_ids.includes(selectedSeriesGenre) && item
      );
    }

    return series?.results;
  }, [series, selectedSeriesGenre]);

  //save data in indexedDB for offline use
  useEffect(() => {
    results?.results.map((item) => addToDB(item));
  }, [results?.results]);

  return (
    <div data-testid="container" className="mt-10 container mx-auto">
      <div className="absolute top-[1.5rem] right-[10rem] flex items-center">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            search();
          }}
          value={input}
          placeholder="enter search value..."
          className="border-white bg-[#334b5b] border-2 p-2 rounded-md text-white outline-0"
        />
      </div>
      <div className="flex overflow-scroll gap-4 pl-8 mb-8 pb-8 overflow-y-hidden">
        <button
          type="button"
          className={` genre-btn  border-2 border-[#334b5b] px-4 rounded-md ${
            !selectedGenre && "bg-[#334b5b]"
          }`}
          onClick={() => {
            setSelectedGenre("");
            setInput("");
          }}
        >
          <span className={` ${!selectedGenre && "text-white"}`}>All</span>
        </button>
        {genres?.genres.map((item) => (
          <React.Fragment key={item.id}>
            <button
              className={`genre-btn border-2 border-[#334b5b] px-4 rounded-md ${
                selectedGenre === item.id && "bg-[#334b5b]"
              }`}
              key={item.id}
              onClick={() => setSelectedGenre(item.id)}
            >
              <span className={` ${selectedGenre === item.id && "text-white"}`}>
                {item.name}
              </span>
            </button>
          </React.Fragment>
        ))}
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          <>
            <h1 className="text-3xl uppercase mb-4 px-8">Trending movies</h1>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-6 px-8 ">
              {filteredMemes?.length === 0 ? (
                <p>no movie available</p>
              ) : (
                <>
                  {filteredMemes?.map((movie) => (
                    <React.Fragment key={movie.id}>
                      <MovieCard movie={movie} />
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div className="mt-16 ">
        {seriesLoading ? (
          <Loading />
        ) : seriesError ? (
          <Error />
        ) : (
          <>
            <div className="flex overflow-scroll gap-4 pl-8 mb-8 pb-8 overflow-y-hidden">
              <button
                className={`border-2 border-[#334b5b] px-4 rounded-md ${
                  !selectedSeriesGenre && "bg-[#334b5b]"
                }`}
                onClick={() => setSelectedSeriesGenre("")}
              >
                <span className={` ${!selectedSeriesGenre && "text-white"}`}>
                  All
                </span>
              </button>
              {seriesGenre?.genres.map((item) => (
                <React.Fragment key={item.id}>
                  <button
                    className={`border-2 border-[#334b5b] px-4 rounded-md ${
                      selectedSeriesGenre === item.id && "bg-[#334b5b]"
                    }`}
                    key={item.id}
                    onClick={() => setSelectedSeriesGenre(item.id)}
                  >
                    <span
                      className={` ${
                        selectedSeriesGenre === item.id && "text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                </React.Fragment>
              ))}
            </div>
            <h1 className="text-3xl uppercase mb-4 px-8">Trending Series</h1>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-6 px-8 ">
              {filteredSeries?.length === 0 ? (
                <p>no series available</p>
              ) : (
                <>
                  {filteredSeries?.map((movie) => (
                    <React.Fragment key={movie.id}>
                      <SeriesCard movie={movie} />
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
