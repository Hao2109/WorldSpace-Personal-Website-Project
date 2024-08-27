import { useEffect, useState } from "react";
import LoadingState from "../components/LoadingState";
import { Link } from "react-router-dom";

const Crew = () => {
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    const fetchCrew = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/crew");
      const data = await res.json();
      setCrew(data);
    };
    fetchCrew();
  }, []);
  return (
    <>
      {!crew ? (
        <LoadingState />
      ) : (
        <section className="py-32">
          <h1
            className="heading text-center uppercase mb-10"
            data-aos="fade-down"
          >
            {" "}
            Crew
          </h1>

          <div className=" max-width grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-5  ">
            {crew.map(({ id, name, image }) => (
              <Link key={id} to={`/crew/${id}`}>
                <article
                  className="relative overflow-hidden group "
                  data-aos="fade-right"
                >
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="h-96 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
                  />
                  <h2 className="absolute bottom-5 left-5 font-bold text-white text-lg tracking-wide group-hover:underline ">
                    {name}
                  </h2>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Crew;
