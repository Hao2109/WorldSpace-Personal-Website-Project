import { Link } from "react-router-dom";
import LoadingState from "../components/LoadingState";
import useFetch from "../hooks/useFetch";

const Rockets = () => {
  const [data] = useFetch("https://api.spacexdata.com/v4/rockets");
  return (
    <>
      {!data ? (
        <LoadingState />
      ) : (
        <section className="py-32 max-width">
          <h1
            className="heading text-center mb-10 uppercase"
            data-aos="fade-down"
          >
            Rockets
          </h1>
          <div
            className=" max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5"
            data-aos="fade-up"
          >
            {data.map(({ id, name, flickr_images, description }) => (
              <Link to={`/rockets/${id}`} key={id}>
                <article className=" overflow-hidden">
                  <img
                    src={flickr_images[0]}
                    alt={name}
                    className="h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="p-5">
                    <h2 className="font-bold text-white mb-3 text-lg">
                      {name}
                    </h2>
                    <p className="text-white opacity-75 mb-10">{`${description.substring(
                      0,
                      80
                    )}...`}</p>

                    <Link to={`/rockets/${id}`} className="btn">
                      Read More
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

export default Rockets;
