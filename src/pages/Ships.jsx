import LoadingState from "../components/LoadingState";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Ships = () => {
  const [data] = useFetch("https://api.spacexdata.com/v4/ships");
  return (
    <>
      {!data ? (
        <LoadingState />
      ) : (
        <section className="py-32 max-width">
          <h1 className="heading text-center mb-10 uppercase">Ships</h1>
          <div className=" max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {data.map(({ id, image, name, home_port }) => (
              <Link to={`/ships/${id}`} key={id}>
                <article className="bg-zinc-900 overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      className="h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110 "
                    />
                  ) : (
                    <img
                      src="https://i.imgur.com/woCxpkj.jpg"
                      alt={name}
                      className="h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  )}
                  <div className="p-5 ">
                    <h2 className="text-white  text-lg mb-3 font-bold ">
                      {name}
                    </h2>
                    <p className="text-white opacity-75 mb-10">{home_port}</p>
                    <Link to={`/ships/${id}`} className="btn">
                      Read more &rarr;
                    </Link>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Ships;
