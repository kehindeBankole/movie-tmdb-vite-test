import { useParams } from "react-router-dom";
import Error from "../../components/error";
import Loading from "../../components/loading";
import { useDetails } from "../../data/details";

function About() {
  const { type, id } = useParams();
  const { data, isLoading, isError } = useDetails(id, type);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <div
            id="about-container"
            className="bg-red-500 h-auto lg:h-4/5 w-full py-[10rem]  overflow-x-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center"
            style={{
              background: `linear-gradient(rgba(0, 0, 0 , 0.5), rgba(0, 0, 0 , 0.5)),url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
            }}
          >
            <div className="container mx-auto flex flex-col justify-center lg:space-x-16 lg:flex-row px-4 lg:mt-0 ">
              <img
                src={`https://image.tmdb.org/t/p/w1280/${data?.poster_path}`}
                alt="movie image"
                className="object-cover w-54 h-[28rem] rounded-3xl border-white border-2"
                loading="lazy"
              />
              <div className="lg:w-1/2">
                <h1 className="text-white text-4xl font-bold mt-3">
                  {data?.title}
                </h1>
                <h3 className="text-white font-light">{data?.tagline}</h3>
                <div className="flex flex-wrap mt-8 gap-4">
                  {data?.genres.map((item) => (
                    <p className="text-white" key={item.id}>
                      {item.name}
                    </p>
                  ))}
                </div>
                <div className="mt-8">
                  <h2 className="text-white text-2xl">OVERVIEW</h2>
                  <p className="text-white">{data?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default About;
