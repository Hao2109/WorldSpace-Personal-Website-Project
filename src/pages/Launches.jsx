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
        <section className="py-32 max-width ">
          <div className=" max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5 ">
            {data.map(({ id, name, links, details }) => (
              <Link
                to={`/launches/${id}`}
                key={id}
                className="p-5 bg-zinc-900 "
              >
                {links.patch.large ? (
                  <img src={links.patch.large} alt={name} />
                ) : (
                  <img src="https://images2.imgbox.com/5b/02/QcxHUb5V_o.png" />
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
