import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCrew = () => {
  const { id } = useParams();
  const [singleCrew, setSinglgeCrew] = useState([]);
  useEffect(() => {
    const fetchSingleCrew = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`);
      const data = await res.json();

      setSinglgeCrew(data);
      console.log(data);
    };
    fetchSingleCrew();
  }, [id]);
  return (
    <>
      <section className="py-32">
        <div className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 px-5">
          <article>
            <img src={singleCrew.image} alt={singleCrew.name} />
          </article>
          <article>
            <h1 className="heading  mb-10">{singleCrew.name}</h1>
            <h2 className="font-bold text-white mb-5">Details</h2>
            <ul className="text-white opacity-75 text-sm">
              <li className="mb-2">Currently at {singleCrew.agency}</li>
              {/* <li className="mb-2">{singleCrew.launches.length} launches</li> */}
              {singleCrew.status === "active" ? (
                <li className="text-emerald-500 capitalize">
                  Status: {singleCrew.status}
                </li>
              ) : (
                <li className="text-rose-500 capitalize ">
                  Status: {singleCrew.status}
                </li>
              )}
            </ul>
            <ul className="flex items-center justify-start gap-5 mt-10">
              <li>
                <a
                  href={singleCrew.wikipedia}
                  target="blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Wikipedia
                </a>
              </li>
              <li className="text-white opacity-75 text-sm hover:opacity-100">
                <Link to="/crew">&larr; Back</Link>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default SingleCrew;
