import { Link } from "react-router-dom";
import { Series } from "../../types/series";

function SeriesCard(props: { movie: Series }) {
  const { movie } = props;
  return (
    <Link to={`/about/tv/${movie.id}`} key={movie.id} className="button">
      <div
        className=" bg-red-500 w-54 h-80 rounded-3xl bg-no-repeat bg-cover bg-center relative hover:-translate-y-2 transition-all duration-300"
        style={{
          background: movie.backdrop_path
            ? `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`
            : "url(https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg)",
        }}
      >
        <div className="bg-blue-500 w-12 h-12 grid border-2 border-white place-items-center rounded-full absolute bottom-[-1rem] left-[2rem]">
          <span className="text-black font-bold">{movie.vote_average}</span>
        </div>
      </div>
      <p className="mt-8 font-bold">{movie?.name}</p>
      <p className="text-xs text-red-500">
        {new Date(movie.first_air_date).toLocaleDateString("en-GB", {
          day: "numeric",
          year: "numeric",
          month: "short",
        })}
      </p>
    </Link>
  );
}

export default SeriesCard;
