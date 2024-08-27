import LoadingState from "../components/LoadingState";
import useFetch from "../hooks/useFetch";

const Starlink = () => {
  const [data] = useFetch("https://api.spacexdata.com/v4/starlink");
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
            Starlink
          </h1>
          <div
            className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5"
            data-aos="fade-up"
          >
            {data.map(({ id, version, spaceTrack }) => (
              <article
                key={id}
                className="bg-zinc-900 p-5 text-white rounded-md"
              >
                <h2 className="font-bold">
                  {spaceTrack.OBJECT_NAME},{" "}
                  <span className="opacity-75 text-base ">{version}</span>
                </h2>
                <p className="opacity-75 mt-5">
                  Launch Date: {spaceTrack.LAUNCH_DATE}
                </p>
                <p className="opacity-75">Launch Site: {spaceTrack.SITE}</p>
                <p className="opacity-75 mt-5">{spaceTrack.COMMENT}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Starlink;
