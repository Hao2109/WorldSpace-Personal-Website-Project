import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingState from "../components/LoadingState";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function SingleLaunches() {
  const [singleLaunch, setSingleLaunch] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchSingleLaunch = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
      const data = await res.json();
      setSingleLaunch(data);
    };
    fetchSingleLaunch();
  }, [id]);
  return (
    <>
      {!singleLaunch ? (
        <LoadingState />
      ) : (
        <section className="py-32 max-width grid grid-cols-1 gap-10 md:grid-cols-2   px-5  ">
          <article>
            {singleLaunch.links.patch.large ? (
              <img
                src={singleLaunch.links.patch.large}
                alt={singleLaunch.name}
              />
            ) : (
              <img src="https://images2.imgbox.com/5b/02/QcxHUb5V_o.png" />
            )}
          </article>
          <article>
            <h1 className="heading ">{singleLaunch.name}</h1>
            <h2 className="text-white font-bold text-2xl mt-2 opacity-75">
              Launch Date:{" "}
              {format(new Date(singleLaunch.date_local), "dd MMMM yyyy, ")}
              {singleLaunch.success ? (
                <span className="text-emerald-500">Successful</span>
              ) : (
                <span className="text-rose-500">Failed</span>
              )}{" "}
            </h2>
            <p className="text-white opacity-75 my-10 ">
              {singleLaunch.details}
            </p>
            <ul className="text-white text-sm opacity-75">
              <li>
                Fairings:{" "}
                {singleLaunch.fairings
                  ? `${singleLaunch.fairings.reused ? "Reused" : "Not Reused"}`
                  : "No Fairings Used"}
              </li>
              <li>
                Recoverd:{" "}
                {singleLaunch.fairings
                  ? `${
                      singleLaunch.fairings.recovered
                        ? "Fairings Recovered"
                        : "Fairings Not Recovered"
                    }`
                  : "No Fairings Used"}
              </li>
            </ul>
            <ul className="flex flex-wrap items-center justify-start gap-8 mt-8">
              <li>
                <a
                  href={singleLaunch.links.article}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Read Article
                </a>
              </li>
              <li>
                <a
                  href={singleLaunch.links.presskit}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Presskit
                </a>
              </li>
              <li>
                <a
                  href={singleLaunch.links.webcast}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Watch launch on Youtube
                </a>
              </li>
              <li>
                <Link to="/launches" className="text-white opacity-75">
                  &larr; Back
                </Link>
              </li>
            </ul>
          </article>
        </section>
      )}
    </>
  );
}
