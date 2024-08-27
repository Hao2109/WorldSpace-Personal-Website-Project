import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dragon = () => {
  const [dragon, setDragon] = useState([]);
  useEffect(() => {
    const fetchDragon = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/dragons");
      const data = await res.json();
      setDragon(data);
    };
    fetchDragon();
  }, []);

  return (
    <>
      <section className="py-32" data-aos="fade-up">
        <h1 className="heading text-center mb-10 uppercase">Dragons</h1>
        <div className=" max-width grid grid-cols-1 gap-5 md:grid-cols-2">
          {dragon.map(({ id, name, flickr_images, description }) => (
            <Link to={`/dragons/${id}`} key={id}>
              <article className="overflow-hidden">
                <img
                  src={flickr_images[1]}
                  alt={name}
                  className="h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-110 p-2"
                />
                <div className=" p-5">
                  <h2 className="text-white text-lg pt-5 mb-3 font-bold tracking-wide">
                    {name}
                  </h2>
                  <p className="text-white opacity-75 text-sm mb-8">
                    {`${description.substring(0, 200)}...`}
                  </p>
                  <Link to={`/dragons/${id}`} className="btn rounded-lg">
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dragon;
