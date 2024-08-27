import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingState from "../components/LoadingState";

const SingleDragon = () => {
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);
  const [singleDragon, setSingleDragon] = useState(null);
  useEffect(() => {
    const fetchSingleDragon = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`);
      const data = await res.json();
      setSingleDragon(data);
    };
    fetchSingleDragon();
  }, [id]);
  return (
    <>
      {!singleDragon ? (
        <LoadingState />
      ) : (
        <section className="py-32 max-width flex flex-col-reverse md:grid md:grid-cols-2 md:gap-10  px-5">
          <article className="mt-8 md:mt-0">
            <h1 className="text-4xl text-white mb-8">{singleDragon.name}</h1>
            <h2 className="font-bold opacity-80 text-lg lg:text-2xl mb-10 text-white">
              First Fight Date: {singleDragon.first_flight}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <ul className="text-sm text-white opacity-75 capitalize flex flex-col items-start justify-start gap-3">
                <li>Type: {singleDragon.type}</li>
                <li>Crew: {singleDragon.crew_capacity}</li>
                {!toggle && <li>Dry Mass: {singleDragon.dry_mass_kg}kg</li>}
                {toggle && <li>Dry Mass: {singleDragon.dry_mass_lb}lb</li>}
                <li>
                  {singleDragon.active ? (
                    <li className="text-emerald-500">Active</li>
                  ) : (
                    <li className="text-rose-500">Inactive</li>
                  )}
                </li>
                <li className="mt-3">
                  {" "}
                  <a
                    href={singleDragon.wikipedia}
                    target="blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Wikipedia
                  </a>
                </li>
              </ul>
              <ul className="bg-zinc-900  text-white text-sm opacity-75 p-3 rounded">
                <h3 className="font-bold opacity-100 text-lg uppercase mb-3">
                  Heat shield details
                </h3>
                <li className="mb-3">
                  Material: {singleDragon.heat_shield.material}
                </li>
                <li className="mb-3">
                  Size: {singleDragon.heat_shield.size_meters}{" "}
                </li>
                <li className="mb-3">
                  Temperature: {singleDragon.heat_shield.temp_degrees} degrees
                </li>
                <li className="mb-3">
                  Dev Partner:{singleDragon.heat_shield.dev_partner}
                </li>
              </ul>
            </div>
            <p className="text-sm opacity-75 text-white mt-5 pb-5 ">
              {singleDragon.description}
            </p>
            <div className="text-white opa-75 text-sm">
              {!toggle && (
                <ul className="grid grid-cols-2 gap-8">
                  <li>
                    Launch Payload Mass: {singleDragon.launch_payload_mass.kg}kg
                  </li>
                  <li>
                    Return Payload Mass: {singleDragon.return_payload_mass.kg}kg
                  </li>
                  <li>
                    Pressurized Capsule Payload Volume: <br />
                    {
                      singleDragon.pressurized_capsule.payload_volume
                        .cubic_meters
                    }
                    m<sup>3</sup>
                  </li>
                  <li>
                    Height With Trunk: {singleDragon.height_w_trunk.meters}m
                  </li>
                  <li>
                    Launch Payload Volume:{" "}
                    {singleDragon.launch_payload_vol.cubic_meters}m<sup>3</sup>
                  </li>
                  <li>
                    Return Payload Volume{" "}
                    {singleDragon.return_payload_vol.cubic_meters}m<sup>3</sup>
                  </li>
                  <li>
                    Trunk Volumn: {singleDragon.trunk.trunk_volume.cubic_meters}
                    m<sup>3</sup>
                  </li>
                  <li>Diameter: {singleDragon.diameter.meters}m</li>
                </ul>
              )}
              {/* Imperial Units */}
              {toggle && (
                <ul className="grid grid-cols-2 gap-8">
                  <li>
                    Launch Payload Mass: {singleDragon.launch_payload_mass.lb}lb
                  </li>
                  <li>
                    Return Payload Mass: {singleDragon.return_payload_mass.lb}lb
                  </li>
                  <li>
                    Pressurized Capsule Payload Volume:{" "}
                    {singleDragon.pressurized_capsule.payload_volume.cubic_feet}
                    ft
                    <sup>3</sup>
                  </li>
                  <li>
                    Height With Trunk: {singleDragon.height_w_trunk.feet}ft
                  </li>
                  <li>
                    Launch Payload Volume:{" "}
                    {singleDragon.launch_payload_vol.cubic_feet}ft<sup>3</sup>
                  </li>
                  <li>
                    Return Payload Volume{" "}
                    {singleDragon.return_payload_vol.cubic_feet}ft<sup>3</sup>
                  </li>
                  <li>
                    Trunk Volumn: {singleDragon.trunk.trunk_volume.cubic_feet}ft
                    <sup>3</sup>
                  </li>
                  <li>Diameter: {singleDragon.diameter.feet}ft</li>
                </ul>
              )}
              {/* Metric Units */}
            </div>
            <ul className="mt-8 flex items-center justify-normal gap-4">
              <li>
                <button onClick={() => setToggle(!toggle)} className="btn">
                  {toggle ? "Show Metric Units" : "Show Imperial Units"}
                </button>
              </li>
              <li>
                <Link
                  to="/dragons"
                  className="text-white opacity-75 text-sm hover:opacity-100"
                >
                  &larr; Back
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <img
              src={singleDragon.flickr_images[value]}
              alt={singleDragon.name}
              className="h-96 object-cover"
            />
            <ul className="flex flex-wrap items-center justify-start gap-3 mt-5">
              {singleDragon.flickr_images.map((image, index) => (
                <li
                  key={index}
                  onClick={() => setValue(index)}
                  className={`${index === value && "p-1 bg-white"}`}
                >
                  <img
                    src={image}
                    alt={singleDragon.name}
                    className="w-40 h-20 object-cover cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          </article>
        </section>
      )}
    </>
  );
};

export default SingleDragon;
