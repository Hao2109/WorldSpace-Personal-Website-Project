import { Link } from "react-router-dom";
import LoadingState from "../components/LoadingState";
import useFetch from "../hooks/useFetch";
const Launches = () => {
  const [data] = useFetch("https://api.spacexdata.com/v4/launches");
  return (
    <>
      {!data ? (
        <LoadingState />
      ) : (
        <section
          className="py-32 max-width "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1
            className="heading text-center mb-10 uppercase"
            data-aos="fade-down"
          >
            Launches
          </h1>
          <div className=" max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5 ">
            {data.map(({ id, name, links, details }) => (
              <Link
                to={`/launches/${id}`}
                key={id}
                className="p-5 overflow-hidden"
              >
                {links.patch.large ? (
                  <img
                    src={links.patch.large}
                    alt={name}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
                  />
                ) : (
                  <img
                    src="https://images2.imgbox.com/5b/02/QcxHUb5V_o.png"
                    className="transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
                  />
                )}

                <h2 className="font-bold text-white mt-5 mb-3 text-xl">
                  {name}
                </h2>
                <p className="text-white opacity-75 ">{`${details
                  ?.toString()
                  .substring(0, 50)}...`}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Launches;
